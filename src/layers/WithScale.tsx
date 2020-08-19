/**
 * A React component to view a PDF document
 *

 */

import React, { useLayoutEffect } from 'react';

interface WithScaleProps {
    rotation: number;
    scale: number;
    callback(): void;
}

const WithScale: React.FC<WithScaleProps> = ({ callback, children, rotation, scale }) => {
    useLayoutEffect(() => {
        callback();
    }, [rotation, scale]);
    return (<>{children}</>);
};

export default WithScale;
