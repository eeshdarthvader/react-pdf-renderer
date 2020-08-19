/**
 * A React component to view a PDF document
 *

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
