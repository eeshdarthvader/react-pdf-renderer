/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const HorizontalScrollingIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M6.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z
                M14.5,21.5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z
                M22.5,21.5 c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V21.5z`}
            />
        </Icon>
    );
};

export default HorizontalScrollingIcon;
