/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import Icon from './Icon';

const CommentIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path d='M.5,16.5a1,1,0,0,0,1,1h2v4l4-4h15a1,1,0,0,0,1-1V3.5a1,1,0,0,0-1-1H1.5a1,1,0,0,0-1,1Z' />
            <path d='M7.25,9.75A.25.25,0,1,1,7,10a.25.25,0,0,1,.25-.25' />
            <path d='M12,9.75a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,9.75' />
            <path d='M16.75,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25' />
        </Icon>
    );
};

export default CommentIcon;
