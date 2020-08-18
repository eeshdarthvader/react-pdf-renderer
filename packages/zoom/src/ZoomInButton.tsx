/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { FC, useContext } from 'react';
import { Button, LocalizationContext, Position, Tooltip } from '@react-pdf-renderer/core';

import { RenderZoomInProps } from './ZoomIn';
import ZoomInIcon from './ZoomInIcon';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

const ZoomInButton: FC<RenderZoomInProps> = ({ onClick }) => {
    const l10nContext = useContext(LocalizationContext);

    const label = (l10nContext && l10nContext.plugins && l10nContext.plugins.zoom)
        ? l10nContext.plugins.zoom.zoomIn
        : 'Zoom in';

    return (
        <Tooltip
            position={Position.BottomCenter}
            target={<Button onClick={onClick}><ZoomInIcon /></Button>}
            content={() => label}
            offset={TOOLTIP_OFFSET}
        />
    );
};

export default ZoomInButton;
