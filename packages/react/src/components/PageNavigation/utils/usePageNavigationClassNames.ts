import { useMemo } from 'react';
import { makeBEM, makeClassName } from '../../../utils';
import { ClassNamesType } from '../../type';

export const usePageNavigationClassNames = (
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
            PageButton: makeBEM(classPrefix, 'PageButton'),
        };
    }, [classPrefix, className, classNames]);
