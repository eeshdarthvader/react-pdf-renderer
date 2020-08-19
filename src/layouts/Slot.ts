/**
 * A React component to view a PDF document
 *

 */

import React from 'react';

interface Attr extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}

interface Slot {
    attrs: Attr;
    children: React.ReactNode;
}

export default Slot;
