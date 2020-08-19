/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { useEffect } from 'react';

const useKeyUp = (targetKeyCode: number, handler: () => void): void => {
    const keyUpHandler = (e: KeyboardEvent): void => {
        (e.keyCode === targetKeyCode) && handler();
    };

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return (): void => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);
};

export default useKeyUp;
