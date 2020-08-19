/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import enUs from './en_US.json';
import LocalizationContext from './LocalizationContext';
import LocalizationMap from './LocalizationMap';

interface LocalizationProviderProps {
    localization?: LocalizationMap;
}

const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children, localization }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const defaultL10n = (enUs as any) as LocalizationMap;
    const l10n = localization || defaultL10n;

    return (
        <LocalizationContext.Provider value={l10n}>
            {children}
        </LocalizationContext.Provider>
    );
};

export default LocalizationProvider;
