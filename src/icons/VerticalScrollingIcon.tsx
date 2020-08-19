/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const VerticalScrollingIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M23.5,5.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V5.5z
                M23.5,13.5c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V13.5z
                M23.5,21.5 c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h21c0.552,0,1,0.448,1,1V21.5z`}
            />
        </Icon>
    );
};

export default VerticalScrollingIcon;
