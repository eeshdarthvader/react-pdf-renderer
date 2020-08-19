/**
 * A React component to view a PDF document
 *

 */

import Offset from '../portal/Offset';

const calculateOffset = (children: HTMLElement, parent: HTMLElement): Offset => {
    let top = children.offsetTop;
    let left = children.offsetLeft;

    let p = children.parentElement;
    while (p && p !== parent) {
        top += p.offsetTop;
        left += p.offsetLeft;
        p = p.parentElement;
    }
    return {
        left,
        top,
    };
};

export default calculateOffset;
