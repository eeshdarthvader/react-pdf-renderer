/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { FC, ReactElement, useContext } from 'react';
import { LocalizationContext, Modal, Store, Toggle } from '@react-pdf-renderer/core';

import InfoIcon from './InfoIcon';
import PropertiesModal from './PropertiesModal';
import ShowPropertiesButton from './ShowPropertiesButton';
import StoreProps from './StoreProps';
import useDocument from './useDocument';

export interface RenderShowPropertiesProps {
    icon: ReactElement;
    label: string;
    onClick(): void;
}

type RenderShowProperties = (props: RenderShowPropertiesProps) => ReactElement;

export interface ShowPropertiesProps {
    children?: RenderShowProperties;
}

const ShowProperties: FC<{
    children?: RenderShowProperties,
    store: Store<StoreProps>,
}> = ({ children, store }) => {
    const { currentDoc } = useDocument(store);
    const l10n = useContext(LocalizationContext);

    const label = (l10n && l10n.plugins && l10n.plugins.properties)
        ? l10n.plugins.properties.showProperties
        : 'Show properties';

    const fileName = store.get('fileName') || '';

    const defaultChildren = (props: RenderShowPropertiesProps) => (
        <ShowPropertiesButton {...props} />
    );
    const render = children || defaultChildren;

    return (
        currentDoc
            ? (
                <Modal
                    target={
                        (toggle: Toggle) => render({
                            icon: <InfoIcon />,
                            label: label as string,
                            onClick: toggle,
                        })
                    }
                    content={
                        (toggle: Toggle) => <PropertiesModal doc={currentDoc} fileName={fileName} onToggle={toggle} />
                    }
                    closeOnClickOutside={true}
                    closeOnEscape={true}
                />
            )
            : <></>
    );
};

export default ShowProperties;
