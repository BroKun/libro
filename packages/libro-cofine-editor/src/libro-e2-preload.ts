import { MonacoEnvironment } from '@difizen/libro-cofine-editor-core';
import type { Syringe } from '@difizen/mana-app';
import { Deferred } from '@difizen/mana-app';

import { PythonLanguageFeature } from './language/python/module.js';
import { SQLLanguageFeature } from './language/sql/module.js';
import { LibroE2ThemeModule } from './theme/module.js';

export const E2LoadedDeferred = new Deferred<void>();

export const loadE2 = async (libroContainer: Syringe.Container) => {
  // libro and e2 share same container!
  MonacoEnvironment.setContainer(libroContainer);
  await MonacoEnvironment.loadModule(async (container) => {
    const textmate = await import('@difizen/libro-cofine-textmate');
    container.load(textmate.TextmateModule);
    container.load(PythonLanguageFeature);
    container.load(SQLLanguageFeature);
    container.load(LibroE2ThemeModule);
  });
  await MonacoEnvironment.init();
  E2LoadedDeferred.resolve();
};
