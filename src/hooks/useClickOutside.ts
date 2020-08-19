/**
 * A React component to view a PDF document
 *

 */

import React, { useEffect } from 'react';

const useClickOutside = (closeOnClickOutside: boolean, targetRef: React.RefObject<HTMLElement>, onClickOutside: () => void): void => {
    const clickHandler = (e: MouseEvent): void => {
        const target = targetRef.current;
        if (target && !target.contains(e.target as Node)) {
            onClickOutside();
        }
    };

    useEffect(() => {
        if (!closeOnClickOutside) {
            return;
        }

        document.addEventListener('click', clickHandler);
        return (): void => {
            document.removeEventListener('click', clickHandler);
        };
    }, []);
};

export default useClickOutside;
