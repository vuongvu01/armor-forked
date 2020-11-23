import { useMemo } from 'react';
import { TooltipAlignmentType } from '../type';
import { makeBEM, makeRootClassName } from '../../../utils';

export const useTooltipClassNames = (
    classPrefix: string,
    className?: string,
    align?: TooltipAlignmentType,
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
