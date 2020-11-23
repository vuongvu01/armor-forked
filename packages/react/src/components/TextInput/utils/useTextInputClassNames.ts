import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const useTextInputClassNames = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    large?: boolean,
    error?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];
        if (disabled) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'disabled'));
        }
        if (large) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'large'));
        }
        if (error) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'error'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
            Input: makeBEM(classPrefix, 'Input'),
            Label: makeBEM(classPrefix, 'Label'),
            LabelBackground: makeBEM(classPrefix, 'LabelBackground'),
        };
    }, [classPrefix, className, disabled, large, error]);
