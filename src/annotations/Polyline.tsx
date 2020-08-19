/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import Annotation from './Annotation';

interface PolylineProps {
    annotation: PdfJs.Annotation;
    page: PdfJs.Page;
    viewport: PdfJs.ViewPort;
}

const Polyline: React.FC<PolylineProps> = ({ annotation, page, viewport }) => {
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
                    className={`${theme.prefixClass}-annotation ${theme.prefixClass}-annotation-polyline`}
                    data-annotation-id={annotation.id}
                    onClick={props.popup.toggleOnClick}
                    onMouseEnter={props.popup.openOnHover}
                    onMouseLeave={props.popup.closeOnHover}
                >
                    {annotation.vertices && annotation.vertices.length && (
                        <svg
                            height={`${height}px`}
                            preserveAspectRatio='none'
                            version='1.1'
                            viewBox={`0 0 ${width} ${height}`}
                            width={`${width}px`}
                        >
                            <polyline
                                fill='none'
                                stroke='transparent'
                                strokeWidth={borderWidth || 1}
                                points={annotation.vertices.map((item) => `${item.x - rect[0]},${rect[3] - item.y}`).join(' ')}
                            />
                        </svg>
                    )}
                    {props.slot.children}
                </div>
            )}
        </Annotation>
    );
};

export default Polyline;
