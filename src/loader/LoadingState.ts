/**
 * A React component to view a PDF document
 *

 */

import LoadingStatus from './LoadingStatus';

class LoadingState extends LoadingStatus {
    public percentages: number;
    constructor(percentages: number) {
        super();
        this.percentages = percentages;
    }
}

export default LoadingState;
