/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './progressBar.less';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-progress-bar`}>
            <div
                className={`${theme.prefixClass}-progress-bar-inner`}
                style={{ width: `${progress}%` }}
            >
                {progress}%
            </div>
        </div>
    );
};

export default ProgressBar;
