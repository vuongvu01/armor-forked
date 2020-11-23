import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../../utils';

export const useMenuElementClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Content: makeBEM(classPrefix, 'Content'),
            ExpansionHandle: makeBEM(classPrefix, 'ExpansionHandle'),
            ExpansionHandleArrow: makeBEM(classPrefix, 'ExpansionHandleArrow'),
        };
    }, [classPrefix, className]);
