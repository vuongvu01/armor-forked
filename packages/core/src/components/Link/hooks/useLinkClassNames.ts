import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

import { LinkPropsType } from '../type';

export const useLinkClassNames = (
    classPrefix: string,
    className?: string,
    props?: LinkPropsType,
) => {
    const { disabled, small, medium, large, underline, pressed } = props || {};

    return useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];

        if (small) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'small'));
        }
        if (medium) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'medium'));
        }
        if (large) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'large'));
        }
        if (underline) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'underline'));
        }
        if (disabled) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'disabled'));
        }
        if (pressed) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'pressed'));
        }
        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
        };
    }, [
        classPrefix,
        className,
        small,
        medium,
        large,
        underline,
        disabled,
        pressed,
    ]);
};
