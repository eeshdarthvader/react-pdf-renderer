/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

 // Represents the error in case the document can't be loaded
interface LoadError {
    message?: string;
    // Some possible values for `name` are
    // - AbortException
    // - FormatError
    // - InvalidPDFException
    // - MissingPDFException
    // - PasswordException
    // - UnexpectedResponseException
    // - UnknownErrorException
    name?: string;
}

export default LoadError;
