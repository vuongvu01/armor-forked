import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';
import { PopperPropsType } from '../../../system/hooks/usePopper';

export const useTooltipClassNames = (
    classPrefix: string,
    className?: string,
    align?: PopperPropsType['align'],
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
