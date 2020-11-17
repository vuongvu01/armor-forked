import { useMemo } from 'react';
import { makeClassName } from '../../../utils';
import { ClassNamesType } from '../../type';

export const useContainerClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
        };
    }, [classPrefix, className, classNames]);
