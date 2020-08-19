/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import useToggle, { Toggle } from '../hooks/useToggle';

export type RenderContent = (toggle: Toggle) => React.ReactNode;
export type RenderTarget = (toggle: Toggle, opened: boolean) => React.ReactNode;

interface PortalProps {
    content: RenderContent;
    target: RenderTarget;
}

const Portal: React.FC<PortalProps> = ({ content, target }) => {
    const { opened, toggle } = useToggle();
    return (
        <>
            {target(toggle, opened)}
            {opened && content(toggle)}
        </>
    );
};

export default Portal;
