import {
  FileTreeContextMenuGroups,
  FileView,
  JupyterFileService,
} from '@difizen/libro-jupyter';
import type { CommandRegistry, MenuRegistry } from '@difizen/mana-app';
import {
  ViewManager,
  ConfigurationService,
  CommandContribution,
  FileStatNode,
  inject,
  MenuContribution,
  ModalService,
  OpenerService,
  singleton,
} from '@difizen/mana-app';
import { l10n } from '@difizen/mana-l10n';

export const AppFileCommands = {
  OPEN_FILE_BY_LIBRO_APP: {
    id: 'fileTree.command.openfilebyapp',
    label: '以 App 的形式打开',
  },
};

@singleton({
  contrib: [CommandContribution, MenuContribution],
})
export class AppFileCommandContribution
  implements CommandContribution, MenuContribution
{
  protected viewManager: ViewManager;
  @inject(JupyterFileService) fileService: JupyterFileService;
  @inject(ModalService) modalService: ModalService;
  @inject(OpenerService) protected openService: OpenerService;
  @inject(ConfigurationService) configurationService: ConfigurationService;

  fileView: FileView;

  constructor(@inject(ViewManager) viewManager: ViewManager) {
    this.viewManager = viewManager;
    this.viewManager
      .getOrCreateView(FileView)
      .then((view) => {
        this.fileView = view;
        return;
      })
      .catch(() => {
        //
      });
  }

  registerMenus(menu: MenuRegistry) {
    menu.registerMenuAction(FileTreeContextMenuGroups['new'], {
      id: AppFileCommands.OPEN_FILE_BY_LIBRO_APP.id,
      command: AppFileCommands.OPEN_FILE_BY_LIBRO_APP.id,
      label: () => <div>{l10n.t(AppFileCommands.OPEN_FILE_BY_LIBRO_APP.label)}</div>,
      order: 'e',
    });
  }
  registerCommands(command: CommandRegistry): void {
    command.registerCommand(AppFileCommands.OPEN_FILE_BY_LIBRO_APP, {
      execute: () => {
        //
      },
      isVisible: (node) => {
        return FileStatNode.is(node) && node.fileStat.isFile;
      },
    });
  }
}
