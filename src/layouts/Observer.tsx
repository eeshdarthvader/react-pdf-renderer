/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useEffect, useRef } from 'react';

interface VisibilityChangedProps {
    isVisible: boolean;
    ratio: number;
}

interface ObserverProps {
    threshold?: number | number[];
    onVisibilityChanged(params: VisibilityChangedProps): void;
}

const Observer: React.FC<ObserverProps> = ({ children, threshold, onVisibilityChanged }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const isVisible = entry.isIntersecting;
                const ratio = entry.intersectionRatio;
                onVisibilityChanged({ isVisible, ratio });
            });
        }, {
            threshold: threshold || 0,
        });
        const container = containerRef.current;
        if (!container) {
            return;
        }
        io.observe(container);

        return (): void => {
            io.unobserve(container);
        };
    }, []);

    return (
        <div ref={containerRef}>{children}</div>
    );
};

export default Observer;
export type VisibilityChanged = VisibilityChangedProps;
