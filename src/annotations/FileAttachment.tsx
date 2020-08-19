/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import downloadFile from '../utils/downloadFile';
import PdfJs from '../vendors/PdfJs';
import Annotation from './Annotation';

interface FileAttachmentProps {
    annotation: PdfJs.Annotation;
    page: PdfJs.Page;
    viewport: PdfJs.ViewPort;
}

const FileAttachment: React.FC<FileAttachmentProps> = ({ annotation, page, viewport }) => {
    const theme = useContext(ThemeContext);
    const hasPopup = annotation.hasPopup === false && (!!annotation.title || !!annotation.contents);

    const doubleClick = (): void => {
        const file = annotation.file;
        file && downloadFile(file.filename, file.content);
    };

    return (
        <Annotation annotation={annotation} hasPopup={hasPopup} ignoreBorder={true} isRenderable={true} page={page} viewport={viewport}>
            {(props): React.ReactElement => (
                <div
                    {...props.slot.attrs}
                    className={`${theme.prefixClass}-annotation ${theme.prefixClass}-annotation-file-attachment`}
                    data-annotation-id={annotation.id}
                    onClick={props.popup.toggleOnClick}
                    onDoubleClick={doubleClick}
                    onMouseEnter={props.popup.openOnHover}
                    onMouseLeave={props.popup.closeOnHover}
                >
                    {props.slot.children}
                </div>
            )}
        </Annotation>
    );
};

export default FileAttachment;
