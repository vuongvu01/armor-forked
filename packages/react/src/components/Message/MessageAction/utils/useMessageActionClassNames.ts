import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../../utils';

export const useMessageActionClassNames = (
    classPrefix: string,
    className?: string,
    useMessageColor?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];
        if (useMessageColor) {
            rootStateClassNames.push(
                makeBEM(classPrefix, 'Root', 'use-message-color'),
            );
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
        };
    }, [classPrefix, className]);
