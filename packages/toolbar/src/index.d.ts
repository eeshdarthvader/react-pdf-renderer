

import { Component, ReactElement } from 'react';
import { Plugin } from '@eeshdarthvader/core';
import { DownloadProps, DownloadPluginProps } from '@eeshdarthvader/download';
import { OpenProps } from '@eeshdarthvader/open';
import { CurrentPageLabelProps, GoToFirstPageProps, GoToFirstPageMenuItemProps, GoToLastPageProps, GoToLastPageMenuItemProps, GoToNextPageProps, GoToPreviousPageProps } from '@eeshdarthvader/page-navigation';
import { ShowPropertiesProps, ShowPropertiesMenuItemProps } from '@eeshdarthvader/properties';
import { CurrentScaleProps, ZoomProps, ZoomInProps, ZoomOutProps } from '@eeshdarthvader/zoom';

export interface ToolbarSlot {
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
    ShowProperties(props: ShowPropertiesProps): ReactElement;
    ShowPropertiesMenuItem(props: ShowPropertiesMenuItemProps): ReactElement;
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
}

export default function toolbarPlugin(props?: ToolbarPluginProps): ToolbarPlugin;

// ----
// Icon
// ----

export class MoreIcon extends Component { }

