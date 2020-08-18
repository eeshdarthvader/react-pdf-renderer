/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import OpenFile from '../OpenFile';

export default interface ViewerState {
    // The current opened file. It can be changed from outside, such as user drags and drops an external file
    // or user opens a file from toolbar
    file: OpenFile;
    // The current page index
    pageIndex: number;
    // Size of page
    pageHeight: number;
    pageWidth: number;
    rotation: number;
    // The current zoom level
    scale: number;
}
