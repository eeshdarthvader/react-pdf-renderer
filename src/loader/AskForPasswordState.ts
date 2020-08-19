/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import LoadingStatus, { VerifyPassword } from './LoadingStatus';

class AskForPasswordState extends LoadingStatus {
    public verifyPasswordFn: VerifyPassword;

    constructor(verifyPasswordFn: VerifyPassword) {
        super();
        this.verifyPasswordFn = verifyPasswordFn;
    }
}

export default AskForPasswordState;
