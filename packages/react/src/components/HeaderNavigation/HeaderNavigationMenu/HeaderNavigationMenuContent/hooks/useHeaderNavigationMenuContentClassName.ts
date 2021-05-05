import { useMemo } from 'react';

import { makeRootClassName } from '../../../../../utils';

const useHeaderNavigationMenuContentClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationMenuContentClassName;
