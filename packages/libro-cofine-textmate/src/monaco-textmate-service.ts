import { EditorHandlerContribution } from '@difizen/libro-cofine-editor-core';
import type { Contribution } from '@difizen/mana-app';
import { Disposable, DisposableCollection } from '@difizen/mana-app';
import { contrib, inject, singleton } from '@difizen/mana-app';
import * as monaco from '@difizen/monaco-editor-core';
import { TokenizationRegistry } from '@difizen/monaco-editor-core/esm/vs/editor/common/languages';
import { ILanguageService } from '@difizen/monaco-editor-core/esm/vs/editor/common/languages/language';
import { TokenizationSupportAdapter } from '@difizen/monaco-editor-core/esm/vs/editor/standalone/browser/standaloneLanguages';
import { StandaloneServices } from '@difizen/monaco-editor-core/esm/vs/editor/standalone/browser/standaloneServices';
import { IStandaloneThemeService } from '@difizen/monaco-editor-core/esm/vs/editor/standalone/common/standaloneTheme';

import {
  isBasicWasmSupported,
  MonacoGrammarRegistry,
  OnigurumaPromise,
} from './monaco-grammar-registry.js';
import { MonacoThemeRegistry } from './monaco-theme-registry.js';
import {
  getEncodedLanguageId,
  LanguageGrammarDefinitionContribution,
} from './textmate-contribution.js';
import { TextmateRegistry } from './textmate-registry.js';
import type { TokenizerOption } from './textmate-tokenizer.js';
import { createTextmateTokenizer } from './textmate-tokenizer.js';

@singleton({ contrib: EditorHandlerContribution })
export class MonacoTextmateService implements EditorHandlerContribution {
  protected readonly tokenizerOption: TokenizerOption = {
    lineLimit: 400,
  };

  protected readonly _activatedLanguages = new Set<string>();
  protected readonly grammarProviders: Contribution.Provider<LanguageGrammarDefinitionContribution>;
  protected readonly textmateRegistry: TextmateRegistry;
  protected readonly grammarRegistry: MonacoGrammarRegistry;
  protected readonly onigasmPromise: OnigurumaPromise;
  protected readonly monacoThemeRegistry: MonacoThemeRegistry;
  constructor(
    @contrib(LanguageGrammarDefinitionContribution)
    grammarProviders: Contribution.Provider<LanguageGrammarDefinitionContribution>,
    @inject(TextmateRegistry) textmateRegistry: TextmateRegistry,
    @inject(MonacoGrammarRegistry) grammarRegistry: MonacoGrammarRegistry,
    @inject(OnigurumaPromise) onigasmPromise: OnigurumaPromise,
    @inject(MonacoThemeRegistry) monacoThemeRegistry: MonacoThemeRegistry,
  ) {
    this.grammarProviders = grammarProviders;
    this.textmateRegistry = textmateRegistry;
    this.grammarRegistry = grammarRegistry;
    this.onigasmPromise = onigasmPromise;
    this.monacoThemeRegistry = monacoThemeRegistry;
  }
  beforeCreate() {
    this.initialize();
  }
  afterCreate() {
    //
  }
  canHandle() {
    return true;
  }
  dispose() {
    //
  }

  initialize(): void {
    if (!isBasicWasmSupported) {
      console.warn('Textmate support deactivated because WebAssembly is not detected.');
      return;
    }

    for (const grammarProvider of this.grammarProviders.getContributions({
      cache: false,
    })) {
      try {
        if (grammarProvider._finishRegisterTextmateLanguage) {
          return;
        }
        grammarProvider.registerTextmateLanguage(this.textmateRegistry);
        grammarProvider._finishRegisterTextmateLanguage = true;
      } catch (err) {
        console.error(err);
      }
    }
    const theme = this.monacoThemeRegistry.getThemeData(this.currentEditorTheme);
    if (!theme) {
      return;
    }
    this.grammarRegistry.setupRegistry(theme);

    for (const id of this.textmateRegistry.languages) {
      this.activateLanguage(id);
    }
  }

  protected readonly toDisposeOnUpdateTheme = new DisposableCollection();

  protected updateTheme(): void {
    this.toDisposeOnUpdateTheme.dispose();

    const { currentEditorTheme } = this;
    document.body.classList.add(currentEditorTheme);
    this.toDisposeOnUpdateTheme.push(
      Disposable.create(() => document.body.classList.remove(currentEditorTheme)),
    );

    // first update registry to run tokenization with the proper theme
    const theme = this.monacoThemeRegistry.getThemeData(currentEditorTheme);
    if (this.grammarRegistry.registry && theme) {
      this.grammarRegistry.registry.setTheme(theme);
    }

    // then trigger tokenization by setting monaco theme
    monaco.editor.setTheme(currentEditorTheme);
  }

  protected get currentEditorTheme(): string {
    return MonacoThemeRegistry.DARK_DEFAULT_THEME;
  }

  activateLanguage(language: string): Disposable {
    const toDispose = new DisposableCollection(
      Disposable.create(() => {
        /* mark as not disposed */
      }),
    );
    toDispose.push(
      this.waitForLanguage(language, () =>
        this.doActivateLanguage(language, toDispose),
      ),
    );
    return toDispose;
  }

  protected async doActivateLanguage(
    languageId: string,
    toDispose: DisposableCollection,
  ): Promise<void> {
    if (this._activatedLanguages.has(languageId)) {
      return;
    }
    this._activatedLanguages.add(languageId);
    toDispose.push(
      Disposable.create(() => this._activatedLanguages.delete(languageId)),
    );

    const scopeName = this.textmateRegistry.getScope(languageId);
    if (!scopeName) {
      return;
    }
    const provider = this.textmateRegistry.getProvider(scopeName);
    if (!provider) {
      return;
    }

    const configuration = this.textmateRegistry.getGrammarConfiguration(languageId);
    const initialLanguage = getEncodedLanguageId(languageId);

    await this.onigasmPromise;
    if (toDispose.disposed) {
      return;
    }
    if (!this.grammarRegistry.registry) {
      return;
    }
    try {
      const grammar = await this.grammarRegistry.registry.loadGrammarWithConfiguration(
        scopeName,
        initialLanguage,
        configuration,
      );
      if (toDispose.disposed) {
        return;
      }
      if (!grammar) {
        throw new Error(
          `no grammar for ${scopeName}, ${initialLanguage}, ${JSON.stringify(
            configuration,
          )}`,
        );
      }
      const options = configuration.tokenizerOption
        ? configuration.tokenizerOption
        : this.tokenizerOption;
      const tokenizer = createTextmateTokenizer(grammar, options);
      toDispose.push(monaco.languages.setTokensProvider(languageId, tokenizer));
      const support = TokenizationRegistry.get(languageId);
      const themeService = StandaloneServices.get(IStandaloneThemeService);
      const adapter = new TokenizationSupportAdapter(
        themeService,
        {
          language: languageId,
          id: StandaloneServices.get(
            ILanguageService,
          )._registry.languageIdCodec._languageToLanguageId.get(languageId),
        },
        tokenizer,
      );
      support!.tokenize = adapter.tokenize.bind(adapter);
    } catch (error) {
      console.warn('No grammar for this language id', languageId, error);
    }
  }

  protected waitForLanguage(
    language: string,
    cb: () => {
      //
    },
  ): Disposable {
    const modeService = StandaloneServices.get(ILanguageService);
    for (const modeId of Object.keys(modeService._instantiatedModes || {})) {
      const mode = modeService._instantiatedModes[modeId];
      if (mode.getId() === language) {
        cb();
        return Disposable.create(() => {
          //
        });
      }
    }
    return monaco.languages.onLanguage(language, cb);
  }
}
