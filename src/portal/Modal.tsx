/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

import { Toggle } from '../hooks/useToggle';
import ModalBody from './ModalBody';
import ModalOverlay from './ModalOverlay';
import Portal, { RenderContent, RenderTarget } from './Portal';

interface ModalProps {
    closeOnClickOutside: boolean;
    closeOnEscape: boolean;
    content: RenderContent;
    target: RenderTarget;
}

const Modal: React.FC<ModalProps> = ({ closeOnClickOutside, closeOnEscape, content, target }) => {
    const renderContent = (toggle: Toggle): React.ReactElement => (
        <ModalOverlay>
            <ModalBody
                closeOnClickOutside={closeOnClickOutside}
                closeOnEscape={closeOnEscape}
                onToggle={toggle}
            >
                {content(toggle)}
            </ModalBody>
        </ModalOverlay>
    );

    return (
        <Portal
            target={target}
            content={renderContent}
        />
    );
};

export default Modal;
