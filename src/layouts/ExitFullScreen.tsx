/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import Button from '../components/Button';
import ExitFullScreenIcon from '../icons/ExitFullScreenIcon';
import ThemeContext from '../theme/ThemeContext';
import './exitFullScreen.less';

interface ExitFullScreenProps {
    onClick(): void;
}

const ExitFullScreen: React.FC<ExitFullScreenProps> = ({ onClick }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-exit-fullscreen`}>
            <div className={`${theme.prefixClass}-exit-fullscreen-inner`}>
                <Button onClick={onClick}><ExitFullScreenIcon /></Button>
            </div>
        </div>
    );
};

export default ExitFullScreen;
