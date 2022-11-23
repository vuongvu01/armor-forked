import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useMultilineTruncateParagraphClassNames = (
    classPrefix: string,
    className?: string,
    truncated?: boolean,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            TextContent: makeBEM(
                classPrefix,
                'TextContent',
                truncated ? 'truncated' : undefined,
            ),
        };
    }, [classPrefix, className, truncated]);
