/**
 * A React component to view a PDF document
 *

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
