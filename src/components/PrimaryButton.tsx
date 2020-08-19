/**
 * A React component to view a PDF document
 *

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
