/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import './propertyItem.less';

interface PropertyItemProps {
    label: string;
    value: string;
}

const PropertyItem: React.FC<PropertyItemProps> = ({ label, value }) => {
    const theme = useContext(ThemeContext);

    return (
        <dl className={`${theme.prefixClass}-property-item`}>
            <dt className={`${theme.prefixClass}-property-item-label`}>
                {label}:
            </dt>
            <dd className={`${theme.prefixClass}-property-item-value`}>
                {value || '-'}
            </dd>
        </dl>
    );
};

export default PropertyItem;
