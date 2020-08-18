/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ReactElement } from 'react';

import defaultToolbar from './defaultToolbar';
import ToolbarSlot from './ToolbarSlot';

type RenderToolbarSlot = (toolbarSlot: ToolbarSlot) => ReactElement;

export interface ToolbarProps {
    children?: RenderToolbarSlot;
}

const Toolbar: React.FC<{
    children?: RenderToolbarSlot,
    slot: ToolbarSlot,
}> = ({ children, slot }) => {
    const render = children || defaultToolbar;
    return render(slot);
};

export default Toolbar;
