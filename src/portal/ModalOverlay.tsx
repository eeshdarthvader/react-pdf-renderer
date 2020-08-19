/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './modalOverlay.less';

interface ModalOverlayProps {
    children?: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${theme.prefixClass}-modal-overlay`}>
            {children}
        </div>
    );
};

export default ModalOverlay;
