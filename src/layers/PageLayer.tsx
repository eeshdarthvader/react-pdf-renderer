/**
 * A React component to view a PDF document
 *

 */

import React, { useContext, useState } from 'react';

import AnnotationLayer from '../annotations/AnnotationLayer';
import Spinner from '../components/Spinner';
import Observer, { VisibilityChanged } from '../layouts/Observer';
import RenderPageProps, { RenderPage } from '../layouts/RenderPage';
import Match from '../search/Match';
import SpecialZoomLevel from '../SpecialZoomLevel';
import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import { CanvasLayerRenderEvent, TextLayerRenderEvent } from '../Viewer';
import CanvasLayer from './CanvasLayer';
import './pageLayer.less';
import SvgLayer from './SvgLayer';
import TextLayer from './TextLayer';

interface PageLayerProps {
    doc: PdfJs.PdfDocument;
    height: number;
    keywordRegexp: RegExp;
    match: Match;
    pageIndex: number;
    renderPage?: RenderPage;
    rotation: number;
    scale: number;
    width: number;
    onCanvasLayerRender(e: CanvasLayerRenderEvent): void;
    onExecuteNamedAction(action: string): void;
    onJumpToDest(pageIndex: number, bottomOffset: number, scaleTo: number | SpecialZoomLevel): void;
    onPageVisibilityChanged(pageIndex: number, ratio: number): void;
    onTextLayerRender(e: TextLayerRenderEvent): void;
}

interface PageSizeState {
    isCalculated: boolean;
    page?: PdfJs.Page | null;
    pageHeight: number;
    pageWidth: number;
    viewportRotation: number;
}

const PageLayer: React.FC<PageLayerProps> = ({
    doc, height, keywordRegexp, match, pageIndex, renderPage, rotation, scale, width,
    onCanvasLayerRender, onExecuteNamedAction, onJumpToDest, onPageVisibilityChanged, onTextLayerRender,
}) => {
    const theme = useContext(ThemeContext);
    const [pageSize, setPageSize] = useState<PageSizeState>({
        isCalculated: false,
        page: null,
        pageHeight: height,
        pageWidth: width,
        viewportRotation: 0,
    });
    const { isCalculated, page, pageHeight, pageWidth } = pageSize;

    const intersectionThreshold = Array(10).fill(null).map((_, i) => i / 10);

    const scaledWidth = pageWidth * scale;
    const scaledHeight = pageHeight * scale;

    const isVertical = Math.abs(rotation) % 180 === 0;
    const w = isVertical ? scaledWidth : scaledHeight;
    const h = isVertical ? scaledHeight : scaledWidth;

    const visibilityChanged = (params: VisibilityChanged): void => {
        const ratio = params.isVisible ? params.ratio : 0;
        onPageVisibilityChanged(pageIndex, ratio);

        if (params.isVisible && !isCalculated) {
            doc.getPage(pageIndex + 1).then((pdfPage) => {
                const viewport = pdfPage.getViewport({ scale: 1 });

                setPageSize({
                    isCalculated: true,
                    page: pdfPage,
                    pageHeight: viewport.height,
                    pageWidth: viewport.width,
                    viewportRotation: viewport.rotation,
                });
            });
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const jumpToMatch = (indexOfPage: number, top: number, left: number): void => {
        onJumpToDest(indexOfPage, pageHeight - top, scale);
    };

    // Default page renderer
    const defaultPageRenderer: RenderPage = (props: RenderPageProps) => (
        <>
            {props.canvasLayer.children}
            {props.textLayer.children}
            {props.annotationLayer.children}
        </>
    );
    const renderPageLayer = renderPage || defaultPageRenderer;

    // To support the document which is already rotated
    const rotationNumber = (rotation + pageSize.viewportRotation) % 360;

    return (
        <Observer onVisibilityChanged={visibilityChanged} threshold={intersectionThreshold}>
            <div
                className={`${theme.prefixClass}-page-layer`}
                style={{
                    height: `${h}px`,
                    width: `${w}px`,
                }}
            >
                {
                    !page
                        ? <Spinner />
                        : renderPageLayer({
                            annotationLayer: {
                                attrs: {},
                                children: (
                                    <AnnotationLayer
                                        doc={doc}
                                        page={page}
                                        rotation={rotationNumber}
                                        scale={scale}
                                        onExecuteNamedAction={onExecuteNamedAction}
                                        onJumpToDest={onJumpToDest}
                                    />
                                )
                            },
                            canvasLayer: {
                                attrs: {},
                                children: (
                                    <CanvasLayer
                                        height={h}
                                        page={page}
                                        pageIndex={pageIndex}
                                        rotation={rotationNumber}
                                        scale={scale}
                                        width={w}
                                        onCanvasLayerRender={onCanvasLayerRender}
                                    />
                                ),
                            },
                            doc,
                            height: h,
                            pageIndex,
                            rotation,
                            scale,
                            svgLayer: {
                                attrs: {},
                                children: (
                                    <SvgLayer height={h} page={page} rotation={rotationNumber} scale={scale} width={w} />
                                ),
                            },
                            textLayer: {
                                attrs: {},
                                children: (
                                    <TextLayer
                                        keywordRegexp={keywordRegexp}
                                        match={match}
                                        page={page}
                                        pageIndex={pageIndex}
                                        rotation={rotationNumber}
                                        scale={scale}
                                        onJumpToMatch={jumpToMatch}
                                        onTextLayerRender={onTextLayerRender}
                                    />
                                )
                            },
                            width: w,
                        })
                }
            </div>
        </Observer>
    );
};

export default PageLayer;
