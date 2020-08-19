/**
 * A React component to view a PDF document
 *

 */

const classNames = (classes: { [clazz: string]: boolean }): string => {
    const result: string[] = [];

    Object.keys(classes).forEach((clazz) => {
        if (clazz && classes[clazz]) {
            result.push(clazz);
        }
    });

    return result.join(' ');
};

export default classNames;
