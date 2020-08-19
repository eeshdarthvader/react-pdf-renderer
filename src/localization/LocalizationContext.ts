/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import LocalizationMap from './LocalizationMap';

const LocalizationContext = React.createContext<LocalizationMap>({});

export default LocalizationContext;
