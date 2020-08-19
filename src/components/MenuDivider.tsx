/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
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