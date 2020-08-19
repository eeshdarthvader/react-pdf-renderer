/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import Annotation from './Annotation';

interface LineProps {
    annotation: PdfJs.Annotation;
    page: PdfJs.Page;
    viewport: PdfJs.ViewPort;
}

const Line: React.FC<LineProps> = ({ annotation, page, viewport }) => {
    const theme = useContext(ThemeContext);
    const hasPopup = annotation.hasPopup === false;
    const isRenderable = !!(annotation.hasPopup || annotation.title || annotation.contents);

    const rect = annotation.rect;
    const width = rect[2] - rect[0];
    const height = rect[3] - rect[1];

    const borderWidth = annotation.borderStyle.width;

    return (
        <Annotation annotation={annotation} hasPopup={hasPopup} ignoreBorder={true} isRenderable={isRenderable} page={page} viewport={viewport}>
            {(props): React.ReactElement => (
                <div
                    {...props.slot.attrs}
                    className={`${theme.prefixClass}-annotation ${theme.prefixClass}-annotation-line`}
                    data-annotation-id={annotation.id}
                    onClick={props.popup.toggleOnClick}
                    onMouseEnter={props.popup.openOnHover}
                    onMouseLeave={props.popup.closeOnHover}
                >
                    <svg
                        height={`${height}px`}
                        preserveAspectRatio='none'
                        version='1.1'
                        viewBox={`0 0 ${width} ${height}`}
                        width={`${width}px`}
                    >
                        <line
                            stroke='transparent'
                            strokeWidth={borderWidth || 1}
                            x1={rect[2] - annotation.lineCoordinates[0]}
                            x2={rect[2] - annotation.lineCoordinates[2]}
                            y1={rect[3] - annotation.lineCoordinates[1]}
                            y2={rect[3] - annotation.lineCoordinates[3]}
                        />
                    </svg>
                    {props.slot.children}
                </div>
            )}
        </Annotation>
    );
};

export default Line;
