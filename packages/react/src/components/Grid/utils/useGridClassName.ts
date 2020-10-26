import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { ClassBasedOnComponentType } from '../type';
import { makeBEM, makeClassName } from '../../../utils';
import { ScalarType } from '../../../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    spacing,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

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
                spacing,
            }),
        };
    }, [classPrefix, className, classNames, spacing]);

export default useGridClassName;
