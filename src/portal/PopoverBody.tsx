/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { createRef, useContext } from 'react';

import useClickOutside from '../hooks/useClickOutside';
import usePosition from '../hooks/usePosition';
import ThemeContext from '../theme/ThemeContext';
import Arrow from './Arrow';
import Offset from './Offset';
import './popoverBody.less';
import Position from './Position';

interface PopoverBodyProps {
    closeOnClickOutside: boolean;
    offset: Offset;
    position: Position;
    targetRef: React.RefObject<HTMLElement>;
    onClose(): void;
}

const PopoverBody: React.FC<PopoverBodyProps> = ({
    children, closeOnClickOutside, offset, position, targetRef, onClose,
}) => {
    const theme = useContext(ThemeContext);
    const contentRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLDivElement>();

    useClickOutside(closeOnClickOutside, contentRef, onClose);
    usePosition(contentRef, targetRef, anchorRef, position, offset);

    return (
        <>
            <div
                ref={anchorRef}
                style={{ left: 0, position: 'absolute', top: 0 }}
            />
            <div className={`${theme.prefixClass}-popover-body`} ref={contentRef}>
                <Arrow customClassName={`${theme.prefixClass}-popover-body-arrow`} position={position} />
                {children}
            </div>
        </>
    );
};

export default PopoverBody;
