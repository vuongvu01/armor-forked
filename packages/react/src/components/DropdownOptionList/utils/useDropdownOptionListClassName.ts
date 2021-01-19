import { useMemo } from 'react';

import { appendClassName, makeBEM } from '../../../utils';
import { ClassBasedOnComponentType } from '../type';

const classGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    disabled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useDropdownOptionListClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                classGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                }),
                className,
            ),
            Item: classGeneratorBasedOnComponent({
                component: 'Item',
                classPrefix,
                disabled,
            }),
        }),
        [classPrefix, className, disabled],
    );
