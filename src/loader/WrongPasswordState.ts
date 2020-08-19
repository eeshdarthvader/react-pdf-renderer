/**
 * A React component to view a PDF document
 *

 */

import LoadingStatus, { VerifyPassword } from './LoadingStatus';

class WrongPasswordState extends LoadingStatus {
    public verifyPasswordFn: VerifyPassword;

    constructor(verifyPasswordFn: VerifyPassword) {
        super();
        this.verifyPasswordFn = verifyPasswordFn;
    }
}

export default WrongPasswordState;
