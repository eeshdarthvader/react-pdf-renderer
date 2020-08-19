/**
 * A React component to view a PDF document
 *

 */

import { useEffect } from 'react';

const useLockScroll = (): void => {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
};

export default useLockScroll;
