/**
 * A React component to view a PDF document
 *

 */

const fileSize = (bytes: number): string => {
    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

export default fileSize;
