/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const removeNode = (ele: Node): void => {
    const parent = ele.parentNode;
    if (parent) {
        parent.removeChild(ele);
    }
};

const replaceNode = (replacementNode: Node, node: Node): void => {
    removeNode(replacementNode);
    const parent = node.parentNode;
    if (parent) {
        parent.insertBefore(replacementNode, node);
    }
    removeNode(node);
};

const unwrap = (ele: Node): void => {
    const parent = ele.parentNode;
    if (!parent) {
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(ele);

    replaceNode(range.extractContents(), ele);

    // Merge the text nodes
    parent.normalize();
};

export default unwrap;
