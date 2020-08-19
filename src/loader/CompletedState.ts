/**
 * A React component to view a PDF document
 *

 */

import PdfJs from '../vendors/PdfJs';
import LoadingStatus from './LoadingStatus';

class CompletedState extends LoadingStatus {
    public doc: PdfJs.PdfDocument;

    constructor(doc: PdfJs.PdfDocument) {
        super();
        this.doc = doc;
    }
}

export default CompletedState;
