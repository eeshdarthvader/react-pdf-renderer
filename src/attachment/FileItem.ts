/**
 * A React component to view a PDF document
 *

 */

import PdfJs from '../vendors/PdfJs';

interface FileItem {
    data: PdfJs.FileData;
    fileName: string;
}

export default FileItem;
