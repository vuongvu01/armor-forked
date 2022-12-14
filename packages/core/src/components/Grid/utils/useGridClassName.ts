import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    spacing,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (spacing && spacing > 0) {
        stateClassNames.push(
            makeBEM(classPrefix, component, `spacing-${spacing}`),
        );
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useGridClassName = (
    classPrefix: string,
    className?: string,
    spacing?: number,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                    spacing,
                }),
                className,
            ),
        };
    }, [classPrefix, className, spacing]);

export default useGridClassName;
