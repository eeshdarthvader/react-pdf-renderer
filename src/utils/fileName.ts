/**
 * A React component to view a PDF document
 *

 */

const fileName = (url: string): string => {
    const str = url.split('/').pop();
    return str ? str.split('#')[0].split('?')[0] : url;
};

export default fileName;
