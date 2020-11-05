import { useMemo } from 'react';
import { makeClassName } from '../../../../utils';
import { ClassNamesType } from '../../../type';

export const useMenuElementClassNames = (
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
            Content: makeClassName(
                classPrefix,
                className,
                classNames,
                'Content',
            ),
            ExpansionHandle: makeClassName(
                classPrefix,
                className,
                classNames,
                'ExpansionHandle',
            ),
            ExpansionHandleArrow: makeClassName(
                classPrefix,
                className,
                classNames,
                'ExpansionHandleArrow',
            ),
        };
    }, [classPrefix, className, classNames]);
