/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { PdfJs } from '@eeshdarthvader/core';

export default interface StoreProps {
    doc?: PdfJs.PdfDocument;
    fileName: string;
}
