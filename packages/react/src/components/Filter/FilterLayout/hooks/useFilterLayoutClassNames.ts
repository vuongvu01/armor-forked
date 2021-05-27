import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useFilterLayoutClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            LeftBar: makeBEM(classPrefix, 'LeftBar'),
            LeftBarContainer: makeBEM(classPrefix, 'LeftBarContainer'),
            Main: makeBEM(classPrefix, 'Main'),
        };
    }, [classPrefix, className]);
