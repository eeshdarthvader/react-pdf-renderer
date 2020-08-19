/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './primaryButton.less';

interface PrimaryButtonProps {
    onClick(): void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
    const theme = useContext(ThemeContext);

    return (
        <button className={`${theme.prefixClass}-primary-button`} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
