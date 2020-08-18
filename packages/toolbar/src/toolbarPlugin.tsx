/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import { Plugin, PluginFunctions, PluginOnDocumentLoad, RenderViewer, ViewerState, PluginOnTextLayerRender } from '@react-pdf-renderer/core';
import downloadPlugin, { DownloadPluginProps } from '@react-pdf-renderer/download';
import dropPlugin from '@react-pdf-renderer/drop';
import fullScreenPlugin from '@react-pdf-renderer/full-screen';
import openPlugin from '@react-pdf-renderer/open';
import pageNavigationPlugin from '@react-pdf-renderer/page-navigation';
import printPlugin from '@react-pdf-renderer/print';
import propertiesPlugin from '@react-pdf-renderer/properties';
import rotatePlugin from '@react-pdf-renderer/rotate';
import scrollModePlugin from '@react-pdf-renderer/scroll-mode';
import searchPlugin, { SearchPluginProps } from '@react-pdf-renderer/search';
import selectionModePlugin, { SelectionModePluginProps } from '@react-pdf-renderer/selection-mode';
import zoomPlugin from '@react-pdf-renderer/zoom';

import Toolbar, { ToolbarProps } from './Toolbar';

interface ToolbarPlugin extends Plugin {
    Toolbar: (props: ToolbarProps) => React.ReactElement;
}

export interface ToolbarPluginProps {
    downloadPlugin?: DownloadPluginProps;
    searchPlugin?: SearchPluginProps;
    selectionModePlugin?: SelectionModePluginProps;
}

const toolbarPlugin = (props?: ToolbarPluginProps): ToolbarPlugin => {
    const downloadPluginInstance = downloadPlugin(props ? props.downloadPlugin : {});
    const dropPluginInstance = dropPlugin();
    const fullScreenPluginInstance = fullScreenPlugin();
    const openPluginInstance = openPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const printPluginInstance = printPlugin();
    const propertiesPluginInstance = propertiesPlugin();
    const rotatePluginInstance = rotatePlugin();
    const scrollModePluginInstance = scrollModePlugin();
    const searchPluginInstance = searchPlugin(props ? props.searchPlugin : {});
    const selectionModePluginInstance = selectionModePlugin(props ? props.selectionModePlugin : {});
    const zoomPluginInstance = zoomPlugin();

    const plugins = [
        downloadPluginInstance,
        dropPluginInstance,
        fullScreenPluginInstance,
        openPluginInstance,
        pageNavigationPluginInstance,
        printPluginInstance,
        propertiesPluginInstance,
        rotatePluginInstance,
        scrollModePluginInstance,
        searchPluginInstance,
        selectionModePluginInstance,
        zoomPluginInstance,
    ];

    const ToolbarDecorator = (props: ToolbarProps) => {
        const { Download } = downloadPluginInstance;
        const { EnterFullScreen } = fullScreenPluginInstance;
        const { Open } = openPluginInstance;
        const {
            CurrentPageInput, CurrentPageLabel, GoToFirstPage, GoToFirstPageMenuItem, GoToLastPage,
            GoToLastPageMenuItem, GoToNextPage, GoToPreviousPage,
        } = pageNavigationPluginInstance;
        const { Print } = printPluginInstance;
        const { ShowProperties, ShowPropertiesMenuItem } = propertiesPluginInstance;
        const { Rotate, RotateBackwardMenuItem, RotateForwardMenuItem } = rotatePluginInstance;
        const { SwitchScrollMode, SwitchScrollModeMenuItem } = scrollModePluginInstance;
        const { ShowSearchPopover } = searchPluginInstance;
        const { SwitchSelectionMode, SwitchSelectionModeMenuItem } = selectionModePluginInstance;
        const { CurrentScale, Zoom, ZoomIn, ZoomOut } = zoomPluginInstance;

        const NumberOfPages = () => (
            <CurrentPageLabel>
                {(props) => <>{props.numberOfPages}</>}
            </CurrentPageLabel>
        );

        return (
            <Toolbar
                {...props}
                slot={{
                    CurrentPageInput,
                    CurrentPageLabel,
                    CurrentScale,
                    Download,
                    EnterFullScreen,
                    GoToFirstPage,
                    GoToFirstPageMenuItem,
                    GoToLastPage,
                    GoToLastPageMenuItem,
                    GoToNextPage,
                    GoToPreviousPage,
                    NumberOfPages,
                    Open,
                    Print,
                    Rotate,
                    RotateBackwardMenuItem,
                    RotateForwardMenuItem,
                    ShowProperties,
                    ShowPropertiesMenuItem,
                    ShowSearchPopover,
                    SwitchScrollMode,
                    SwitchScrollModeMenuItem,
                    SwitchSelectionMode,
                    SwitchSelectionModeMenuItem,
                    Zoom,
                    ZoomIn,
                    ZoomOut,
                }}
            />
        );
    };

    return {
        install: (pluginFunctions: PluginFunctions) => {
            // Install plugins
            plugins.forEach(plugin => {
                if (plugin.install) {
                    plugin.install(pluginFunctions);
                }
            });
        },
        renderViewer: (props: RenderViewer) => {
            let { slot } = props;
            plugins.forEach(plugin => {
                if (plugin.renderViewer) {
                    slot = plugin.renderViewer({ ...props, slot });
                }
            });
            return slot;
        },
        uninstall: (pluginFunctions: PluginFunctions) => {
            // Unistall plugins
            plugins.forEach(plugin => {
                if (plugin.uninstall) {
                    plugin.uninstall(pluginFunctions);
                }
            });
        },
        onDocumentLoad: (props: PluginOnDocumentLoad) => {
            plugins.forEach(plugin => {
                if (plugin.onDocumentLoad) {
                    plugin.onDocumentLoad(props);
                }
            });
        },
        onTextLayerRender: (props: PluginOnTextLayerRender) => {
            plugins.forEach(plugin => {
                if (plugin.onTextLayerRender) {
                    plugin.onTextLayerRender(props);
                }
            });
        },
        onViewerStateChange: (viewerState: ViewerState) => {
            let newState = viewerState;
            plugins.forEach(plugin => {
                if (plugin.onViewerStateChange) {
                    newState = plugin.onViewerStateChange(newState);
                }
            });
            return newState;
        },
        Toolbar: ToolbarDecorator,
    };
};

export default toolbarPlugin;
