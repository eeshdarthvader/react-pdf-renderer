/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ReactElement } from 'react';

import { DownloadProps } from '@react-pdf-renderer/download';
import { EnterFullScreenProps } from '@react-pdf-renderer/full-screen';
import { OpenProps } from '@react-pdf-renderer/open';
import { CurrentPageLabelProps, GoToFirstPageMenuItemProps, GoToFirstPageProps, GoToLastPageMenuItemProps, GoToLastPageProps, GoToNextPageProps, GoToPreviousPageProps } from '@react-pdf-renderer/page-navigation';
import { PrintProps } from '@react-pdf-renderer/print';
import { ShowPropertiesProps, ShowPropertiesMenuItemProps } from '@react-pdf-renderer/properties';
import { RotateDecoratorProps, RotateProps } from '@react-pdf-renderer/rotate';
import { SwitchScrollModeMenuItemProps, SwitchScrollModeProps } from '@react-pdf-renderer/scroll-mode';
import type { ShowSearchPopoverProps } from '@react-pdf-renderer/search';
import { SwitchSelectionModeMenuItemProps, SwitchSelectionModeProps } from '@react-pdf-renderer/selection-mode';
import { CurrentScaleProps, ZoomProps, ZoomInProps, ZoomOutProps } from '@react-pdf-renderer/zoom';

export default interface ToolbarSlot {
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
