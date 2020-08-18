/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { ReactElement } from 'react';
import { SpecialZoomLevel, Store } from '@eeshdarthvader/core';

import StoreProps from './StoreProps';
import useZoom from './useZoom';
import ZoomPopover from './ZoomPopover';

export interface RenderZoomProps {
    scale: number;
    onZoom(newScale: number | SpecialZoomLevel): void;
}

type RenderZoom = (props: RenderZoomProps) => ReactElement;

export interface ZoomProps {
    children?: RenderZoom;
}

const Zoom: React.FC<{
    children?: RenderZoom,
    store: Store<StoreProps>,
}> = ({ children, store }) => {
    const { scale } = useZoom(store);

    const zoomTo = (newLevel: number | SpecialZoomLevel) => {
        const zoom = store.get('zoom');
        if (zoom) {
            zoom(newLevel);
        }
    };

    const defaultChildren = (props: RenderZoomProps) => <ZoomPopover scale={props.scale} onZoom={props.onZoom} />;
    const render = children || defaultChildren;

    return render({
        scale,
        onZoom: zoomTo,
    });
};

export default Zoom;
