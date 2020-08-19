/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Slot from './Slot';
import { RenderToolbar } from './ToolbarSlot';

export type Layout = (
    isSidebarOpened: boolean,
    container: Slot,
    main: Slot,
    toolbar: RenderToolbar,
    sidebar: Slot,
) => React.ReactElement;
