/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const ParagraphIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path d='M17.5 0.498L17.5 23.498' />
            <path d='M10.5 0.498L10.5 23.498' />
            <path d='M23.5.5H6.5a6,6,0,0,0,0,12h4' />
        </Icon>
    );
};

export default ParagraphIcon;
