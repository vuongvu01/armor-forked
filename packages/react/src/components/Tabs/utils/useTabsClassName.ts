import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../utils';

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

const useTabsClassName = (
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
        }),
        [classPrefix, className, disabled],
    );

export default useTabsClassName;
