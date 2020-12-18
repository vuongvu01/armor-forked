import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const usePageNavigationClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const pageButtonClassName = makeBEM(classPrefix, 'PageButton');

        return {
            Root: rootClassNames,
            PageButton: pageButtonClassName,
            ArrowButton: `${makeBEM(
                classPrefix,
                'ArrowButton',
            )} ${pageButtonClassName}`,
        };
    }, [classPrefix, className]);
