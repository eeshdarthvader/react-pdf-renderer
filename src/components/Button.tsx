/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import classNames from '../utils/classNames';
import './button.less';

interface ButtonProps {
    isSelected?: boolean;
    onClick(): void;
}

const Button: React.FC<ButtonProps> = ({ children, isSelected = false, onClick }) => {
    const theme = useContext(ThemeContext);

    return (
        <button
            className={
                classNames({
                    [`${theme.prefixClass}-button`]: true,
                    [`${theme.prefixClass}-button-selected`]: isSelected,
                })
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
