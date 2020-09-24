import { useMemo } from 'react';
import { makeClassName } from '../../../../utils';
import { ClassNamesType } from '../../../type';

export const useTableActionClassNames = (
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
        };
    }, [classPrefix, className, classNames]);
