import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useContentSwitcherControlClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);

        return {
            Root: `${baseClassNames}`,
        };
    }, [classPrefix, className]);
