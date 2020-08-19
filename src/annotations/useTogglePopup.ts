/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-renderer.dev
 * @license https://react-pdf-renderer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { useState } from 'react';

import useToggle, { ToggleStatus } from '../hooks/useToggle';

enum TogglePopupBy {
    Click = 'Click',
    Hover = 'Hover',
}

interface UsePopupResult {
    opened: boolean;
    closeOnHover: () => void;
    openOnHover: () => void;
    toggleOnClick: () => void;
}

const useTogglePopup = (): UsePopupResult => {
    const { opened, toggle } = useToggle();
    const [togglePopupBy, setTooglePopupBy] = useState(TogglePopupBy.Hover);

    const toggleOnClick = (): void => {
        switch (togglePopupBy) {
            case TogglePopupBy.Click:
                opened && setTooglePopupBy(TogglePopupBy.Hover);
                toggle(ToggleStatus.Toggle);
                break;
            case TogglePopupBy.Hover:
                setTooglePopupBy(TogglePopupBy.Click);
                toggle(ToggleStatus.Open);
                break;
        }
    };

    const openOnHover = (): void => {
        togglePopupBy === TogglePopupBy.Hover && toggle(ToggleStatus.Open);
    };

    const closeOnHover = (): void => {
        togglePopupBy === TogglePopupBy.Hover && toggle(ToggleStatus.Close);
    };

    return {
        opened,
        closeOnHover,
        openOnHover,
        toggleOnClick,
    };
};

export default useTogglePopup;
