/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { createRef, useContext } from 'react';

import usePosition from '../hooks/usePosition';
import ThemeContext from '../theme/ThemeContext';
import Arrow from './Arrow';
import Offset from './Offset';
import Position from './Position';
import './tooltipBody.less';

interface TooltipBodyProps {
    offset: Offset;
    position: Position;
    targetRef: React.RefObject<HTMLElement>;
}

const TooltipBody: React.FC<TooltipBodyProps> = ({ children, offset, position, targetRef }) => {
    const theme = useContext(ThemeContext);
    const contentRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLDivElement>();

    usePosition(contentRef, targetRef, anchorRef, position, offset);

    return (
        <>
            <div
                ref={anchorRef}
                style={{ left: 0, position: 'absolute', top: 0 }}
            />
            <div className={`${theme.prefixClass}-tooltip-body`} ref={contentRef}>
                <Arrow customClassName={`${theme.prefixClass}-tooltip-body-arrow`} position={position} />
                <div className={`${theme.prefixClass}-tooltip-body-content`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default TooltipBody;
