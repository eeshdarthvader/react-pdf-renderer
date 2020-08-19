/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import PdfJs from './vendors/PdfJs';

interface WorkerProps {
    workerUrl: string;
}

const Worker: React.FC<WorkerProps> = ({ children, workerUrl }) => {
    PdfJs.GlobalWorkerOptions.workerSrc = workerUrl;
    return <>{children}</>;
};

export default Worker;
