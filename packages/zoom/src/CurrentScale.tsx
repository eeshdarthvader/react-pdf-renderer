/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Store } from '@react-pdf-renderer/core';

import StoreProps from './StoreProps';
import useZoom from './useZoom';

interface RenderCurrentScaleProps {
    scale: number;
}

type RenderCurrentScale = (props: RenderCurrentScaleProps) => React.ReactElement;

export interface CurrentScaleProps {
    children?: RenderCurrentScale;
}

const CurrentScale: React.FC<{
    children?: RenderCurrentScale,
    store: Store<StoreProps>,
}> = ({ children, store }) => {
    const { scale } = useZoom(store);

    const defaultChildren = (props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>;
    const render = children || defaultChildren;

    return render({ scale });
};

export default CurrentScale;
