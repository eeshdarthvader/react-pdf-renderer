/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
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
