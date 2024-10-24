import { ErrorOutputModel } from '@difizen/libro-jupyter';
import { ManaModule } from '@difizen/mana-app';

import { LibroAINativeCommandContribution } from './ai-native-command-contribution.js';
import { LibroAIChatSlotContribution } from './chat-slot-contribution.js';
import { ChatView } from './chat-view.js';
import { AIErrorOutputModel } from './error-output-model.js';
import { LibroAINativeColorRegistry } from './libro-ai-native-color-registry.js';

export const LibroAINativeModule = ManaModule.create().register(
  LibroAINativeColorRegistry,
  ChatView,
  LibroAIChatSlotContribution,
  LibroAINativeCommandContribution,
  {
    token: ErrorOutputModel,
    useClass: AIErrorOutputModel,
  },
);
