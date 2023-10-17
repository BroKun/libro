import { AutoInsertWhenNoCell, EnterEditModeWhenAddCell } from '@difizen/libro-core';
import { ConfigurationContribution, ConfigurationService } from '@difizen/mana-app';
import { ApplicationContribution } from '@difizen/mana-app';
import { inject, singleton } from '@difizen/mana-app';

import { LibroAutosaveSetting } from './config.js';

@singleton({ contrib: ConfigurationContribution })
export class LibroSettingContribution implements ConfigurationContribution {
  registerConfigurations() {
    return [LibroAutosaveSetting];
  }
}
@singleton({ contrib: ApplicationContribution })
export class ConfigAppContribution implements ApplicationContribution {
  @inject(ConfigurationService) configurationService: ConfigurationService;
  onViewStart() {
    this.configurationService.set(AutoInsertWhenNoCell, true);
    this.configurationService.set(EnterEditModeWhenAddCell, false);
  }
}
