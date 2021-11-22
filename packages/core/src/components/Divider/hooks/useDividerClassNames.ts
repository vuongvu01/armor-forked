import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

import { DividerPropsType } from '../type';

export const useDividerClassNames = (
    classPrefix: string,
    className?: string,
    props?: DividerPropsType,
) => {
    const { horizontal, vertical } = props || {};
    return useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);
        const stateClassNames: string[] = [];

        if (horizontal) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'horizontal'));
        }
        if (vertical) {
            stateClassNames.push(makeBEM(classPrefix, 'Root', 'vertical'));
        }
        return {
            Root: `${baseClassNames} ${stateClassNames.join(' ')}`.trim(),
        };
    }, [classPrefix, className, horizontal, vertical]);
};
