import { ViewManager, inject, singleton } from '@difizen/mana-app';

import type { IWidgetViewProps } from '../base/protocal.js';
import { WidgetViewContribution } from '../base/protocal.js';

import { ProgressWidget } from './progress-widget-view.js';

@singleton({ contrib: WidgetViewContribution })
export class ProgressWidgetViewContribution implements WidgetViewContribution {
  @inject(ViewManager) viewManager: ViewManager;
  canHandle = (attributes: any) => {
    if (
      attributes._model_name === 'FloatProgressModel' ||
      attributes._model_name === 'IntProgressModel' ||
      attributes._model_name === 'TransientProgressModel'
    ) {
      return 100;
    }
    return 1;
  };
  factory(props: IWidgetViewProps) {
    return this.viewManager.getOrCreateView(ProgressWidget, props);
  }
}
