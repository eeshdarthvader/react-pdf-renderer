/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useContext, useEffect, useRef, useState } from 'react';

import Spinner from '../components/Spinner';
import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import { decrease } from '../zoom/zoomingLevel';
import './pageSizeCalculator.less';
import PageSize from './PageSize';

interface PageSizeCalculatorProps {
    doc: PdfJs.PdfDocument;
    render(pageSize: PageSize): React.ReactElement;
}

const PageSizeCalculator: React.FC<PageSizeCalculatorProps> = ({ doc, render }) => {
    const theme = useContext(ThemeContext);
    const pagesRef = useRef<HTMLDivElement | null>(null);
    const [pageSize, setPageSize] = useState<PageSize>({
        pageHeight: 0,
        pageWidth: 0,
        scale: 1,
    });

    useEffect(() => {
        doc.getPage(1).then((pdfPage) => {
            const viewport = pdfPage.getViewport({ scale: 1 });
            const w = viewport.width;
            const h = viewport.height;

            const pagesEle = pagesRef.current;
            if (!pagesEle) {
                return;
            }

            // Determine the best scale that fits the document within the container
            const scaled = pagesEle.offsetWidth / w;
            const scale = decrease(Math.max(1, scaled));

            setPageSize({
                pageHeight: h,
                pageWidth: w,
                scale,
            });
        });
    }, [doc]);

    const { pageWidth } = pageSize;
    return (
        pageWidth === 0
            ? (
                <div className={`${theme.prefixClass}-page-size-calculator`} ref={pagesRef}>
                    <Spinner />
                </div>
            )
            : render(pageSize)
    );
};

export default PageSizeCalculator;
