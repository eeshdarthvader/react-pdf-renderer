/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

interface ThemeContextProps {
    prefixClass: string;
}

const ThemeContext = React.createContext<ThemeContextProps>({
    prefixClass: 'viewer',
});

export default ThemeContext;
