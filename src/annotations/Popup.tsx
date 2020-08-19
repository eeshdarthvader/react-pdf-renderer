/**
 * A React component to view a PDF document
 *

 */

import React, { useContext, useLayoutEffect } from 'react';

import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import Annotation from './Annotation';
import PopupWrapper from './PopupWrapper';

interface PopupProps {
    annotation: PdfJs.Annotation;
    page: PdfJs.Page;
    viewport: PdfJs.ViewPort;
}

const Popup: React.FC<PopupProps> = ({ annotation, page, viewport }) => {
    const theme = useContext(ThemeContext);
    const isRenderable = !!(annotation.title || annotation.contents);

    // Don't render the popup for annotation whose parent renders the annotation themselves
    const ignoredParents = ['Circle', 'Ink', 'Line', 'Polygon', 'PolyLine', 'Square'];
    const hasPopup = !annotation.parentType || ignoredParents.indexOf(annotation.parentType) !== -1;

    useLayoutEffect(() => {
        if (!annotation.parentId) {
            return;
        }
        const parent = document.querySelector(`[data-annotation-id="${annotation.parentId}"]`) as HTMLElement;
        const container = document.querySelector(`[data-annotation-id="${annotation.id}"]`) as HTMLElement;
        if (!parent || !container) {
            return;
        }
        const left = parseFloat(parent.style.left)
        const top = parseFloat(parent.style.top) + parseFloat(parent.style.height);

        container.style.left = `${left}px`;
        container.style.top = `${top}px`;
        container.style.transformOrigin = `-${left}px -${top}px`;
    }, []);

    return (
        <Annotation annotation={annotation} hasPopup={hasPopup} ignoreBorder={false} isRenderable={isRenderable} page={page} viewport={viewport}>
            {(props): React.ReactElement => (
                <div
                    {...props.slot.attrs}
                    className={`${theme.prefixClass}-annotation ${theme.prefixClass}-annotation-popup`}
                    data-annotation-id={annotation.id}
                >
                    <PopupWrapper annotation={annotation} />
                </div>
            )}
        </Annotation>
    );
};

export default Popup;
