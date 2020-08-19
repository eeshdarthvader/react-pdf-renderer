/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import LocalizationMap from './LocalizationMap';

const LocalizationContext = React.createContext<LocalizationMap>({});

export default LocalizationContext;
