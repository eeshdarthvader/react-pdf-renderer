/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Component, ReactElement } from 'react';
import { Plugin } from '@react-pdf-renderer/core';
import { DownloadProps, DownloadPluginProps } from '@react-pdf-renderer/download';
import { EnterFullScreenProps } from '@react-pdf-renderer/full-screen';
import { OpenProps } from '@react-pdf-renderer/open';
import { CurrentPageLabelProps, GoToFirstPageProps, GoToFirstPageMenuItemProps, GoToLastPageProps, GoToLastPageMenuItemProps, GoToNextPageProps, GoToPreviousPageProps } from '@react-pdf-renderer/page-navigation';
import { PrintProps } from '@react-pdf-renderer/print';
import { ShowPropertiesProps, ShowPropertiesMenuItemProps } from '@react-pdf-renderer/properties';
import { RotateDecoratorProps, RotateProps } from '@react-pdf-renderer/rotate';
import { SwitchScrollModeMenuItemProps, SwitchScrollModeProps } from '@react-pdf-renderer/scroll-mode';
import { SearchPluginProps, ShowSearchPopoverProps } from '@react-pdf-renderer/search';
import { SelectionModePluginProps, SwitchSelectionModeMenuItemProps, SwitchSelectionModeProps } from '@react-pdf-renderer/selection-mode';
import { CurrentScaleProps, ZoomProps, ZoomInProps, ZoomOutProps } from '@react-pdf-renderer/zoom';

export interface ToolbarSlot {
    CurrentPageInput(): ReactElement;
    CurrentPageLabel(props: CurrentPageLabelProps): ReactElement;
    CurrentScale(props: CurrentScaleProps): ReactElement;
    Download(props: DownloadProps): ReactElement;
    EnterFullScreen(props: EnterFullScreenProps): ReactElement;
    GoToFirstPage(props: GoToFirstPageProps): ReactElement;
    GoToFirstPageMenuItem(props: GoToFirstPageMenuItemProps): ReactElement;
    GoToLastPage(props: GoToLastPageProps): ReactElement;
    GoToLastPageMenuItem(props: GoToLastPageMenuItemProps): ReactElement;
    GoToNextPage(props: GoToNextPageProps): ReactElement;
    GoToPreviousPage(props: GoToPreviousPageProps): ReactElement;
    NumberOfPages(): ReactElement;
    Open(props: OpenProps): ReactElement;
    Print(props: PrintProps): ReactElement;
    Rotate(props: RotateProps): ReactElement;
    RotateBackwardMenuItem(props: RotateDecoratorProps): ReactElement;
    RotateForwardMenuItem(props: RotateDecoratorProps): ReactElement;
    ShowProperties(props: ShowPropertiesProps): ReactElement;
    ShowPropertiesMenuItem(props: ShowPropertiesMenuItemProps): ReactElement;
    ShowSearchPopover(props: ShowSearchPopoverProps): ReactElement;
    SwitchScrollMode(props: SwitchScrollModeProps): ReactElement;
    SwitchScrollModeMenuItem(props: SwitchScrollModeMenuItemProps): ReactElement;
    SwitchSelectionMode(props: SwitchSelectionModeProps): ReactElement;
    SwitchSelectionModeMenuItem(props: SwitchSelectionModeMenuItemProps): ReactElement;
    Zoom(props: ZoomProps): ReactElement;
    ZoomIn(props: ZoomInProps): ReactElement;
    ZoomOut(props: ZoomOutProps): ReactElement;
}

export interface ToolbarProps {
    children?: (toolbarSlot: ToolbarSlot) => ReactElement;
}

export interface ToolbarPlugin extends Plugin {
    Toolbar: (props: ToolbarProps) => ReactElement;
}

export interface ToolbarPluginProps {
    downloadPlugin?: DownloadPluginProps;
    searchPlugin?: SearchPluginProps;
    selectionModePlugin?: SelectionModePluginProps;
}

export default function toolbarPlugin(props?: ToolbarPluginProps): ToolbarPlugin;

// ----
// Icon
// ----

export class MoreIcon extends Component { }

