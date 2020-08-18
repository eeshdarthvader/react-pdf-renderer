/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import Viewer, { Plugin, ViewerProps } from '@react-pdf-renderer/core';
import attachmentPlugin from '@react-pdf-renderer/attachment';
import bookmarkPlugin from '@react-pdf-renderer/bookmark';
import thumbnailPlugin from '@react-pdf-renderer/thumbnail';
import toolbarPlugin, { ToolbarPluginProps } from '@react-pdf-renderer/toolbar';

import Sidebar from './Sidebar';

export interface DefaultLayoutProps extends ViewerProps {
    toolbarPlugin?: ToolbarPluginProps;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    const attachmentPluginInstance = attachmentPlugin();
    const bookmarkPluginInstance = bookmarkPlugin();
    const thumbnailPluginInstance = thumbnailPlugin();
    const toolbarPluginInstance = toolbarPlugin(props ? props.toolbarPlugin : {});

    const { Attachments } = attachmentPluginInstance;
    const { Bookmarks } = bookmarkPluginInstance;
    const { Thumbnails } = thumbnailPluginInstance;
    const { Toolbar } = toolbarPluginInstance;

    const plugins: Plugin[] = [
        attachmentPluginInstance,
        bookmarkPluginInstance,
        thumbnailPluginInstance,
        toolbarPluginInstance,
    ];

    return (
        <div className='rpv-default-layout-container'>
            <div className='rpv-default-layout-toolbar'>
                <Toolbar />
            </div>
            <div className='rpv-default-layout-main'>
                <Sidebar
                    tabContents={[
                        () => <Thumbnails />,
                        () => <Bookmarks />,
                        () => <Attachments />,
                    ]}
                />
                <div className='rpv-default-layout-body'>
                    <Viewer
                        {...props}
                        plugins={plugins}
                    />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
