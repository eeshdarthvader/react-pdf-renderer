

import React from 'react';
import Viewer, { Plugin, ViewerProps } from '@eeshdarthvader/core';
import toolbarPlugin, { ToolbarPluginProps } from '@eeshdarthvader/toolbar';


export interface DefaultLayoutProps extends ViewerProps {
    toolbarPlugin?: ToolbarPluginProps;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    const toolbarPluginInstance = toolbarPlugin(props ? props.toolbarPlugin : {});

    const { Toolbar } = toolbarPluginInstance;

    const plugins: Plugin[] = [
        toolbarPluginInstance,
    ];

    return (
        <div className='rpv-default-layout-container'>
            <div className='rpv-default-layout-toolbar'>
                <Toolbar />
            </div>
            <div className='rpv-default-layout-main'>

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
