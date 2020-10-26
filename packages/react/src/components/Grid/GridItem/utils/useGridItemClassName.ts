import { useMemo } from 'react';

import { ClassNamesType } from '../../../type';
import { makeBEM, makeClassName } from '../../../../utils';
import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    gutterSpacing,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

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
    classNames?: ClassNamesType,
    spacing?: number,
) =>
    useMemo(() => {
        return {
            Root: getClassNameByComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                gutterSpacing: spacing,
            }),
        };
    }, [classPrefix, className, classNames, spacing]);
