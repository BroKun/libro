import { ViewManager, inject, singleton } from '@difizen/mana-app';

import type { IWidgetViewProps } from '../base/protocal.js';
import { WidgetViewContribution } from '../base/protocal.js';

import { LibroTextWidget } from './text-widget-view.js';

@singleton({ contrib: WidgetViewContribution })
export class TextModelContribution implements WidgetViewContribution {
  @inject(ViewManager) viewManager: ViewManager;
  canHandle = (attributes: any) => {
    if (attributes._model_name === 'TextModel') {
      return 100;
    }
    return 1;
  };
  factory(props: IWidgetViewProps) {
    return this.viewManager.getOrCreateView(LibroTextWidget, props);
  }
}
