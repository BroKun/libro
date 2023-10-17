import type { IRawCell } from '@difizen/libro-common';
import { LibroCellModel, CellOptions } from '@difizen/libro-core';
import { inject, transient } from '@difizen/mana-app';
import { Emitter } from '@difizen/mana-app';
import type { Event as ManaEvent } from '@difizen/mana-app';

@transient()
export class LibroRawCellModel extends LibroCellModel {
  // Emitter Msg
  msgChangeEmitter: Emitter<any>;

  get msgChange(): ManaEvent<any> {
    return this.msgChangeEmitter.event;
  }

  constructor(@inject(CellOptions) options: CellOptions) {
    super(options);
    this.msgChangeEmitter = new Emitter<any>();
    this.mimeType = 'text/plain';
  }

  override toJSON(): IRawCell {
    return {
      id: this.id,
      cell_type: 'raw',
      source: this.value,
      metadata: this.metadata,
    };
  }

  override dispose() {
    super.dispose();
    this.msgChangeEmitter.dispose();
  }

  getSource() {
    return this.value;
  }
}
