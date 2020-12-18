import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const useTextInputClassNames = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    large?: boolean,
    error?: boolean,
    isLabelInside?: boolean,
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

        let labelClassName = makeBEM(classPrefix, 'Label');
        if (isLabelInside) {
            labelClassName = `${labelClassName} ${makeBEM(
                classPrefix,
                'Label',
                'inside',
            )}`;
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
            InnerContainer: makeBEM(classPrefix, 'InnerContainer'),
            Input: makeBEM(classPrefix, 'Input'),
            InputTag: makeBEM(classPrefix, 'InputTag'),
            Label: labelClassName,
            LabelBackground: makeBEM(classPrefix, 'LabelBackground'),
        };
    }, [classPrefix, className, disabled, large, error, isLabelInside]);
