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

interface PageThumbnailProps {
    page: PdfJs.Page;
    pageHeight: number;
    pageWidth: number;
    rotation: number;
    onLoad(): void;
}

const PageThumbnail: React.FC<PageThumbnailProps> = ({
    page, pageHeight, pageWidth, rotation, onLoad,
}) => {
    const theme = useContext(ThemeContext);
    const renderTask = useRef<PdfJs.PageRenderTask>();
    const [src, setSrc] = useState('');

    useEffect(() => {
        const task = renderTask.current;
        if (task) {
            task.cancel();
        }

        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        const printUnit = 150 / 72;
        canvas.height = Math.floor(pageHeight * printUnit);
        canvas.width = Math.floor(pageWidth * printUnit);

        const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvasContext.save();
        canvasContext.fillStyle = 'rgb(255, 255, 255)';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.restore();

        const viewport = page.getViewport({ rotation, scale: 1 });
        renderTask.current = page.render({
            canvasContext,
            intent: 'print',
            transform: [printUnit, 0, 0, printUnit, 0, 0],
            viewport,
        });
        renderTask.current.promise.then(
            () => {
                ('toBlob' in canvas)
                    ? canvas.toBlob((blob) => {
                        setSrc(URL.createObjectURL(blob));
                    })
                    : setSrc((canvas as HTMLCanvasElement).toDataURL());
            },
            () => {/**/ },
        );
    }, []);

    return (
        !src
            ? <Spinner />
            : (
                <div
                    className={`${theme.prefixClass}-print-page-thumbnail`}
                    style={{
                        height: `${Math.floor(pageHeight * 96 / 72)}px`,
                        width: `${Math.floor(pageWidth * 96 / 72)}px`,
                    }}
                >
                    <img
                        src={src}
                        style={{
                            height: `${Math.floor(pageHeight * 96 / 72)}px`,
                            width: `${Math.floor(pageWidth * 96 / 72)}px`,
                        }}
                        onLoad={onLoad}
                    />
                </div>
            )
    );
};

export default PageThumbnail;
