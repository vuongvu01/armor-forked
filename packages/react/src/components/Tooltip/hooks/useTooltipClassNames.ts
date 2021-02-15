import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';
import { PopperPlacementType } from '../../../system/hooks/type';

export const useTooltipClassNames = (
    classPrefix: string,
    className?: string,
    align?: PopperPlacementType,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];
        if (align) {
            rootStateClassNames.push(
                makeBEM(
                    classPrefix,
                    'Root',
                    `align-${align === 'top' ? 'top' : 'bottom'}`,
                ),
            );
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
            Arrow: makeBEM(classPrefix, 'Arrow'),
        };
    }, [classPrefix, className, align]);
