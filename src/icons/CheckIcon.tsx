/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import Icon from './Icon';

const CheckIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path d={`M23.5,0.499l-16.5,23l-6.5-6.5`} />
        </Icon>
    );
};

export default CheckIcon;
