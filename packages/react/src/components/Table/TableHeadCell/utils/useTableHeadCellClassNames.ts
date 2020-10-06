import { useMemo } from 'react';
import { makeBEM, makeClassName } from '../../../../utils';
import { ClassNamesType } from '../../../type';

export const useTableHeadCellClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );

        return {
            Root: rootClassNames,
            AlphabeticalIcon: makeBEM(classPrefix, 'AlphabeticalIcon'),
            NumericalIcon: makeBEM(classPrefix, 'NumericalIcon'),
            ArrowUpIcon: makeBEM(classPrefix, 'ArrowUpIcon'),
            ArrowDownIcon: makeBEM(classPrefix, 'ArrowDownIcon'),
        };
    }, [classPrefix, className, classNames]);
