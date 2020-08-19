/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const SearchIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z
                M23.5,23.5
                l-5.929-5.929`}
            />
        </Icon>
    );
};

export default SearchIcon;
