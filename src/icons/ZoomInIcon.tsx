/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const ZoomInIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M10.5,0.499c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.499,10.5,0.499z
                M23.5,23.499
                l-5.929-5.929
                M5.5,10.499h10
                M10.5,5.499v10`}
            />
        </Icon>
    );
};

export default ZoomInIcon;
