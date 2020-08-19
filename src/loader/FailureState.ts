/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
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
