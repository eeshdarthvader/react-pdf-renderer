/**
 * A React component to view a PDF document
 *

 */

import LoadError from './LoadError';
import LoadingStatus from './LoadingStatus';

class FailureState extends LoadingStatus {
    public error: LoadError;

    constructor(error: LoadError) {
        super();
        this.error = error;
    }
}

export default FailureState;
