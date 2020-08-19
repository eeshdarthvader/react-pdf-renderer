/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './menuDivider.less';

const MenuDivider: React.FC = () => {
    const theme = useContext(ThemeContext);
    return (
        <li className={`${theme.prefixClass}-menu-divider`} />
    );
};

export default MenuDivider;
