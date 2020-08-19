/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import CheckIcon from '../icons/CheckIcon';
import ThemeContext from '../theme/ThemeContext';
import './menuItem.less';

interface MenuItemProps {
    checked?: boolean;
    icon?: React.ReactElement;
    onClick(): void;
}

const MenuItem: React.FC<MenuItemProps> = ({ checked = false, children, icon = null, onClick }) => {
    const theme = useContext(ThemeContext);

    return (
        <li className={`${theme.prefixClass}-menu-item`} onClick={onClick}>
            <div className={`${theme.prefixClass}-menu-item-icon`}>
                {icon}
            </div>
            <div className={`${theme.prefixClass}-menu-item-label`}>
                {children}
            </div>
            <div className={`${theme.prefixClass}-menu-item-check`}>
                {checked && <CheckIcon />}
            </div>
        </li>
    );
};

export default MenuItem;
