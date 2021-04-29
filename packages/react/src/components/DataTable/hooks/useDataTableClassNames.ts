import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const useDataTableClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const elementName = 'Row';
        return {
            Root: makeRootClassName(classPrefix, className),
            Footer: makeBEM(classPrefix, 'Footer'),
            VirtualPaddingTop: makeBEM(classPrefix, 'VirtualPaddingTop'),
            VirtualPaddingBottom: makeBEM(classPrefix, 'VirtualPaddingBottom'),
            Row: makeBEM(classPrefix, elementName),
            RowFirst: makeBEM(classPrefix, elementName, 'First'),
            RowLast: makeBEM(classPrefix, elementName, 'Last'),
            RowEven: makeBEM(classPrefix, elementName, 'Even'),
            RowOdd: makeBEM(classPrefix, elementName, 'Odd'),
        };
    }, [classPrefix, className]);
