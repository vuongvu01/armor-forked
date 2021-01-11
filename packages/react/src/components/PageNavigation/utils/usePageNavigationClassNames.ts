import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const usePageNavigationClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const pageButtonClassName = makeBEM(classPrefix, 'PageButton');

        return {
            Root: makeRootClassName(classPrefix, className),
            PageButton: pageButtonClassName,
            Buttons: makeBEM(classPrefix, 'Buttons'),
            ArrowButton: `${makeBEM(
                classPrefix,
                'ArrowButton',
            )} ${pageButtonClassName}`,
            PageSize: makeBEM(classPrefix, 'PageSize'),
            PageSizeSelector: makeBEM(classPrefix, 'PageSizeSelector'),
        };
    }, [classPrefix, className]);
