/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { Fragment, useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import SpecialZoomLevel from '../SpecialZoomLevel';
import PdfJs from '../vendors/PdfJs';
import AnnotationLoader from './AnnotationLoader';
import AnnotationType from './AnnotationType';
import Caret from './Caret';
import Circle from './Circle';
import FileAttachment from './FileAttachment';
import FreeText from './FreeText';
import Highlight from './Highlight';
import Ink from './Ink';
import Line from './Line';
import Link from './Link';
import Polygon from './Polygon';
import Polyline from './Polyline';
import Popup from './Popup';
import Square from './Square';
import Squiggly from './Squiggly';
import Stamp from './Stamp';
import StrikeOut from './StrikeOut';
import Text from './Text';
import Underline from './Underline';

interface AnnotationLayerProps {
    doc: PdfJs.PdfDocument;
    page: PdfJs.Page;
    rotation: number;
    scale: number;
    onExecuteNamedAction(action: string): void;
    onJumpToDest(pageIndex: number, bottomOffset: number, scaleTo: number | SpecialZoomLevel): void;
}

const AnnotationLayer: React.FC<AnnotationLayerProps> = ({ doc, page, rotation, scale, onExecuteNamedAction, onJumpToDest }) => {
    const theme = useContext(ThemeContext);

    const renderAnnotations = (annotations: PdfJs.Annotation[]): React.ReactElement => {
        const viewport = page.getViewport({ rotation, scale });
        const clonedViewPort = viewport.clone({ dontFlip: true });

        return (
            <>
            {
                annotations
                    .filter((annotation) => !annotation.parentId)
                    .map((annotation) => {
                        const childAnnotation = annotations.find((item) => item.parentId === annotation.id);
                        switch (annotation.annotationType) {
                            case AnnotationType.Caret:
                                return (
                                    <Caret
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Circle:
                                return (
                                    <Circle
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.FileAttachment:
                                return (
                                    <FileAttachment
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.FreeText:
                                return (
                                    <FreeText
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Highlight:
                                return (
                                    <Highlight
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Ink:
                                return (
                                    <Ink
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Line:
                                return (
                                    <Line
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Link:
                                return (
                                    <Link
                                        key={annotation.id}
                                        annotation={annotation}
                                        doc={doc}
                                        page={page}
                                        viewport={clonedViewPort}
                                        onExecuteNamedAction={onExecuteNamedAction}
                                        onJumpToDest={onJumpToDest}
                                    />
                                );
                            case AnnotationType.Polygon:
                                return (
                                    <Polygon
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Polyline:
                                return (
                                    <Polyline
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Popup:
                                return (
                                    <Popup
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Square:
                                return (
                                    <Square
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Squiggly:
                                return (
                                    <Squiggly
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Stamp:
                                return (
                                    <Stamp
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.StrikeOut:
                                return (
                                    <StrikeOut
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Text:
                                return (
                                    <Text
                                        key={annotation.id}
                                        annotation={annotation}
                                        childAnnotation={childAnnotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            case AnnotationType.Underline:
                                return (
                                    <Underline
                                        key={annotation.id}
                                        annotation={annotation}
                                        page={page}
                                        viewport={clonedViewPort}
                                    />
                                );
                            default:
                                return <Fragment key={annotation.id}></Fragment>;
                        }
                    })
            }
            </>
        );
    };

    return (
        <div className={`${theme.prefixClass}-annotation-layer`}>
            <AnnotationLoader page={page} renderAnnotations={renderAnnotations} />
        </div>
    );
};

export default AnnotationLayer;
