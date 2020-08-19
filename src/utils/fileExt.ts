/**
 * A React component to view a PDF document
 *

 */

const getFileExt = (url: string): string => {
    const str = url.split(/\./).pop();
    return str ? str.toLowerCase() : '';
};

export default getFileExt;
