import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useTableHeadCellClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);

        return {
            Root: rootClassNames,
            AlphabeticalIcon: makeBEM(classPrefix, 'AlphabeticalIcon'),
            NumericalIcon: makeBEM(classPrefix, 'NumericalIcon'),
            ArrowUpIcon: makeBEM(classPrefix, 'ArrowUpIcon'),
            ArrowDownIcon: makeBEM(classPrefix, 'ArrowDownIcon'),
        };
    }, [classPrefix, className]);
