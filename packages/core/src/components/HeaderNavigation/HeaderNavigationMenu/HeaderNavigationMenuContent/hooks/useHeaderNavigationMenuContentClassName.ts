import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

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
