/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

interface ToolbarSlot {
    currentPage: number;
    numPages: number;
    toggleSidebarButton: React.ReactNode;
    searchPopover: React.ReactNode;
    previousPageButton: React.ReactNode;
    nextPageButton: React.ReactNode;
    currentPageInput: React.ReactNode;
    zoomOutButton: React.ReactNode;
    zoomPopover: React.ReactNode;
    zoomInButton: React.ReactNode;
    fullScreenButton: React.ReactNode;
    downloadButton: React.ReactNode;
    openFileButton: React.ReactNode;
    goToFirstPageButton: React.ReactNode;
    goToLastPageButton: React.ReactNode;
    rotateClockwiseButton: React.ReactNode;
    rotateCounterclockwiseButton: React.ReactNode;
    textSelectionButton: React.ReactNode;
    handToolButton: React.ReactNode;
    verticalScrollingButton: React.ReactNode;
    horizontalScrollingButton: React.ReactNode;
    wrappedScrollingButton: React.ReactNode;
    documentPropertiesButton: React.ReactNode;
    moreActionsPopover: React.ReactNode;
}

export type RenderToolbarSlot = (toolbarSlot: ToolbarSlot) => React.ReactElement;
export type RenderToolbar = (renderToolbar: RenderToolbarSlot) => React.ReactElement;
export default ToolbarSlot;
