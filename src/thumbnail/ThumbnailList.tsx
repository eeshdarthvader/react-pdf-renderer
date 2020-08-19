/**
 * A React component to view a PDF document
 *

 */

import React, { useContext } from 'react';

import ThemeContext from '../theme/ThemeContext';
import classNames from '../utils/classNames';
import PdfJs from '../vendors/PdfJs';
import ThumbnailContainer from './ThumbnailContainer';
import './thumbnailList.less';

interface ThumbnailListProps {
    currentPage: number;
    doc: PdfJs.PdfDocument;
    pageHeight: number;
    pageWidth: number;
    rotation: number;
    onJumpToPage(pageIndex: number): void;
}

const ThumbnailList: React.FC<ThumbnailListProps> = ({
    currentPage, doc, pageHeight, pageWidth, rotation, onJumpToPage,
}) => {
    const theme = useContext(ThemeContext);
    const { numPages } = doc;
    return (
        <>
            {
                Array(numPages).fill(0).map((_, index) => {
                    const onClick = (): void => onJumpToPage(index);
                    return (
                        <div key={`thumbnail-${index}`}>
                            <div
                                className={
                                    classNames({
                                        [`${theme.prefixClass}-thumbnail`]: true,
                                        [`${theme.prefixClass}-thumbnail-selected`]: currentPage === index,
                                    })
                                }
                                onClick={onClick}
                            >
                                <ThumbnailContainer
                                    doc={doc}
                                    pageHeight={pageHeight}
                                    pageIndex={index}
                                    pageWidth={pageWidth}
                                    rotation={rotation}
                                />
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default ThumbnailList;
