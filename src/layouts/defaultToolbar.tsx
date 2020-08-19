/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './defaultToolbar.less';
import ToolbarSlot, { RenderToolbarSlot } from './ToolbarSlot';

const defaultToolbar: RenderToolbarSlot = (toolbarSlot: ToolbarSlot): React.ReactElement => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-toolbar`}>
            <div className={`${theme.prefixClass}-toolbar-left`}>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.toggleSidebarButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.searchPopover}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.previousPageButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.currentPageInput} / {toolbarSlot.numPages}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.nextPageButton}
                </div>
            </div>
            <div className={`${theme.prefixClass}-toolbar-center`}>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.zoomOutButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.zoomPopover}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.zoomInButton}
                </div>
            </div>
            <div className={`${theme.prefixClass}-toolbar-right`}>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.fullScreenButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.openFileButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.downloadButton}
                </div>
                <div className={`${theme.prefixClass}-toolbar-item`}>
                    {toolbarSlot.moreActionsPopover}
                </div>
            </div>
        </div>
    );
};

export default defaultToolbar;
