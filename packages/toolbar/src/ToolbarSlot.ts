

import { ReactElement } from 'react';

import { DownloadProps } from '@eeshdarthvader/download';
import { OpenProps } from '@eeshdarthvader/open';
import { CurrentPageLabelProps, GoToFirstPageMenuItemProps, GoToFirstPageProps, GoToLastPageMenuItemProps, GoToLastPageProps, GoToNextPageProps, GoToPreviousPageProps } from '@eeshdarthvader/page-navigation';
import { CurrentScaleProps, ZoomProps, ZoomInProps, ZoomOutProps } from '@eeshdarthvader/zoom';

export default interface ToolbarSlot {
    CurrentPageInput(): ReactElement;
    CurrentPageLabel(props: CurrentPageLabelProps): ReactElement;
    CurrentScale(props: CurrentScaleProps): ReactElement;
    Download(props: DownloadProps): ReactElement;
    GoToFirstPage(props: GoToFirstPageProps): ReactElement;
    GoToFirstPageMenuItem(props: GoToFirstPageMenuItemProps): ReactElement;
    GoToLastPage(props: GoToLastPageProps): ReactElement;
    GoToLastPageMenuItem(props: GoToLastPageMenuItemProps): ReactElement;
    GoToNextPage(props: GoToNextPageProps): ReactElement;
    GoToPreviousPage(props: GoToPreviousPageProps): ReactElement;
    NumberOfPages(): ReactElement;
    Open(props: OpenProps): ReactElement;
    Zoom(props: ZoomProps): ReactElement;
    ZoomIn(props: ZoomInProps): ReactElement;
    ZoomOut(props: ZoomOutProps): ReactElement;
}
