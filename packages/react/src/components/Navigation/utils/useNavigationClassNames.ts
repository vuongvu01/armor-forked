import { useMemo } from 'react';
import { makeClassName } from '../../../utils';
import { ClassNamesType } from '../../type';

export const useNavigationClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
            SubNode: makeClassName(
                classPrefix,
                className,
                classNames,
                'SubNode',
            ),
        };
    }, [classPrefix, className, classNames]);
