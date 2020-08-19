/**
 * A React component to view a PDF document
 *

 */

import PdfJs from '../vendors/PdfJs';

interface PropertiesData {
    fileName: string;
    info: PdfJs.MetaDataInfo;
    length: number;
}

export default PropertiesData;
