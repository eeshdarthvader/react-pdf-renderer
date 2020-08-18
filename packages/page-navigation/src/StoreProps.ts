/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export default interface StoreProps {
    currentPage?: number;
    numberOfPages?: number;
    jumpToPage?(pageIndex: number): void;
}
