/**
 * A React component to view a PDF document
 *

 */

import PdfJs from './vendors/PdfJs';

interface File {
    data: PdfJs.FileData;
    name: string;
};

export default File;
