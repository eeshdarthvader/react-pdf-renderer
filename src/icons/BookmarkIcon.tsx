/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import Icon from './Icon';

const BookmarkIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path
                d={`M11.5,1.5h11c0.552,0,1,0.448,1,1v20c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-20c0-0.552,0.448-1,1-1h3
                M11.5,10.5c0,0.55-0.3,0.661-0.659,0.248L8,7.5l-2.844,3.246c-0.363,0.414-0.659,0.3-0.659-0.247v-9c0-0.552,0.448-1,1-1h5
                c0.552,0,1,0.448,1,1L11.5,10.5z
                M14.5,6.499h6
                M14.5,10.499h6
                M3.5,14.499h17
                M3.5,18.499h16.497`}
            />
        </Icon>
    );
};

export default BookmarkIcon;