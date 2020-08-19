/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import PdfJs from '../vendors/PdfJs';
import Slot from './Slot';

interface RenderPageProps {
    annotationLayer: Slot;
    canvasLayer: Slot;
    doc: PdfJs.PdfDocument;
    height: number;
    pageIndex: number;
    rotation: number;
    scale: number;
    svgLayer: Slot;
    textLayer: Slot;
    width: number;
}

export type RenderPage = (props: RenderPageProps) => React.ReactElement;
export default RenderPageProps;
