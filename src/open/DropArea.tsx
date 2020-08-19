/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import LocalizationContext from '../localization/LocalizationContext';
import ThemeContext from '../theme/ThemeContext';
import './dropArea.less';

const DropArea: React.FC = () => {
    const l10n = useContext(LocalizationContext);
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-drop-area`}>
            {l10n.main.dragDropFile}
        </div>
    );
};

export default DropArea;
