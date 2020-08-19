/**
 * A React component to view a PDF document
 *

 */

import React, { useContext, useEffect, useState } from 'react';

import Spinner from '../components/Spinner';
import ThemeContext from '../theme/ThemeContext';
import PdfJs from '../vendors/PdfJs';
import PropertiesData from './PropertiesData';
import './propertiesLoader.less';

interface PropertiesLoaderProps {
    doc: PdfJs.PdfDocument;
    render(doc: PropertiesData): React.ReactElement;
}

const PropertiesLoader: React.FC<PropertiesLoaderProps> = ({ doc, render }) => {
    const theme = useContext(ThemeContext);
    const [data, setData] = useState<PropertiesData>();

    useEffect(() => {
        doc.getMetadata().then((meta) => {
            return Promise.resolve(meta);
        }).then((meta) => {
            return doc.getDownloadInfo().then((d) => {
                return Promise.resolve({
                    fileName: meta.contentDispositionFilename || '',
                    info: meta.info,
                    length: d.length,
                });
            });
        }).then((response) => {
            setData(response);
        });
    }, []);

    return (
        data ? render(data) : <div className={`${theme.prefixClass}-properties-loader`}><Spinner /></div>
    );
};

export default PropertiesLoader;
