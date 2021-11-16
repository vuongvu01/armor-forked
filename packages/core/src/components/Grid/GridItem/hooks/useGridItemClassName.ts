import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    gutterSpacing,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (gutterSpacing && gutterSpacing > 0) {
        stateClassNames.push(
            makeBEM(classPrefix, component, `spacing-${gutterSpacing}`),
        );
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useGridItemClassName = (
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
                    gutterSpacing: spacing,
                }),
                className,
            ),
        };
    }, [classPrefix, className, spacing]);
