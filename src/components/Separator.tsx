/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './separator.less';

const Separator: React.FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-separator`} />
    );
};

export default Separator;
