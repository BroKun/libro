import {
  useInject,
  ToolbarInstance,
  getOrigin,
  CommandRegistry,
} from '@difizen/mana-app';
import type { Toolbar } from '@difizen/mana-app';
import { Select } from 'antd';
import { memo } from 'react';

import type { CellMeta } from '../cell/index.js';
import { LibroCellService } from '../cell/index.js';
import { NotebookCommands } from '../command/index.js';

import type { LibroToolbarArags } from './libro-toolbar-protocol.js';
import './index.less';

const { Option } = Select;
const widthStyle = { width: 110 };
type ChangeType = {
  name: string;
  type: string;
};
export const ToolItemSelectInner: React.FC = () => {
  const cellService: LibroCellService = useInject(LibroCellService);
  const invertList: CellMeta[] = cellService.cellsMeta;
  const toolbar = useInject<Toolbar>(ToolbarInstance);
  const data = toolbar.currentArgs as LibroToolbarArags;
  const command = useInject(CommandRegistry);
  const curCell = data?.[0];

  const handleChange = (value: string) => {
    const args = getOrigin(data) || [];
    command.executeCommand(NotebookCommands['ChangeCellTo'].id, ...args, value);
  };
  return (
    <>
      <Select
        value={curCell?.model?.type}
        size={'small'}
        style={widthStyle}
        onChange={handleChange}
        bordered={false}
        popupClassName="libro-cell-selector"
      >
        {invertList.map((item: ChangeType) => {
          return (
            <Option value={item.type} key={item.name}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export const ToolItemSelect = memo(ToolItemSelectInner);
