/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const getFileExt = (url: string): string => {
    const str = url.split(/\./).pop();
    return str ? str.toLowerCase() : '';
};

export default getFileExt;
