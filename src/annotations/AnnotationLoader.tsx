/**
 * A React component to view a PDF document
 *

 */

import React, { useEffect, useState } from 'react';

import PdfJs from '../vendors/PdfJs';

interface AnnotationLayerProps {
    page: PdfJs.Page;
    renderAnnotations(annotations: PdfJs.Annotation[]): React.ReactElement;
}

const AnnotationLoader: React.FC<AnnotationLayerProps> = ({ page, renderAnnotations }) => {
    const [loading, setLoading] = useState(true);
    const [annotations, setAnnotations] = useState<PdfJs.Annotation[]>([]);

    useEffect(() => {
        page.getAnnotations({ intent: 'display' }).then((result) => {
            setLoading(false);
            setAnnotations(result);
        });
    }, []);

    return (
        loading
            ? <></>
            : renderAnnotations(annotations)
    );
};

export default AnnotationLoader;
