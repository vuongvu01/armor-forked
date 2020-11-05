import { useMemo } from 'react';
import { makeBEM, makeClassName } from '../../../utils';
import { ClassNamesType } from '../../type';

export const useMenuClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
        };
    }, [classPrefix, className, classNames]);
