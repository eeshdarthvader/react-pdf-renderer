/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

interface ThemeContextProps {
    prefixClass: string;
}

const ThemeContext = React.createContext<ThemeContextProps>({
    prefixClass: 'rpv-core',
});

export default ThemeContext;
