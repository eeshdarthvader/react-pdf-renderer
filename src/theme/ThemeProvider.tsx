/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import ThemeContext from './ThemeContext';

interface ThemeProviderProps {
    prefixClass?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, prefixClass }) => {
    return (
        <ThemeContext.Provider value={{ prefixClass: prefixClass || 'viewer' }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
