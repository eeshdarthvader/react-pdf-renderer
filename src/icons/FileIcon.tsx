/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const FileIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M7.618,15.345l8.666-8.666c0.78-0.812,2.071-0.838,2.883-0.058s0.838,2.071,0.058,2.883
                c-0.019,0.02-0.038,0.039-0.058,0.058L7.461,21.305c-1.593,1.593-4.175,1.592-5.767,0s-1.592-4.175,0-5.767c0,0,0,0,0,0
                L13.928,3.305c2.189-2.19,5.739-2.19,7.929-0.001s2.19,5.739,0,7.929l0,0L13.192,19.9`}
            />
        </Icon>
    );
};

export default FileIcon;
