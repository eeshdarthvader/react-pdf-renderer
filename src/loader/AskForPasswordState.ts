/**
 * A React component to view a PDF document
 *

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
