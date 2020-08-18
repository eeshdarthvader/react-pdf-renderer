

import React, { ReactElement } from 'react';

import MoreActionsPopover from './MoreActionsPopover';
import ToolbarSlot from './ToolbarSlot';

const defaultToolbar = (toolbarSlot: ToolbarSlot): ReactElement => {
    const {
        CurrentPageInput, Download, GoToNextPage, GoToPreviousPage,
        NumberOfPages, Open, Zoom, ZoomIn,
        ZoomOut,
    } = toolbarSlot;

    return (
        <div className='rpv-toolbar'>
            <div className='rpv-toolbar-left'>

                <div className='rpv-toolbar-item'>
                    <GoToPreviousPage />
                </div>
                <div className='rpv-toolbar-item'>
                    <CurrentPageInput /> / <NumberOfPages />
                </div>
                <div className='rpv-toolbar-item'>
                    <GoToNextPage />
                </div>
            </div>
            <div className='rpv-toolbar-center'>
                <div className='rpv-toolbar-item'>
                    <ZoomOut />
                </div>
                <div className='rpv-toolbar-item'>
                    <Zoom />
                </div>
                <div className='rpv-toolbar-item'>
                    <ZoomIn />
                </div>
            </div>
            <div className='rpv-toolbar-right'>

                <div className='rpv-toolbar-item'>
                    <Open />
                </div>
                <div className='rpv-toolbar-item'>
                    <Download />
                </div>

                <div className='rpv-toolbar-item'>
                    <MoreActionsPopover toolbarSlot={toolbarSlot} />
                </div>
            </div>
        </div>
    );
};

export default defaultToolbar;
