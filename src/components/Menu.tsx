/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './menu.less';

interface MenuProps {
    children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <ul className={`${theme.prefixClass}-menu`}>
            {children}
        </ul>
    );
};

export default Menu;
