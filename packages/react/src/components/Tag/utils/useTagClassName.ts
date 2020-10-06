import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import {
    ClassBasedOnComponentType,
    TagDeleteIconModeType,
    TagType,
} from '../type';
import { makeBEM, makeClassName } from '../../../utils';
import isStatusTag from './isStatusTag';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    deleteOption,
    type,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

    const stateClassNames: string[] = [];

    if (type) {
        stateClassNames.push(makeBEM(classPrefix, component, type));
    }

    if (deleteOption && !isStatusTag(type)) {
        stateClassNames.push(makeBEM(classPrefix, component, `delete`));
        stateClassNames.push(makeBEM(classPrefix, component, deleteOption));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useTagClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    deleteOption?: TagDeleteIconModeType,
    type?: TagType,
) =>
    useMemo(() => {
        return {
            Root: getClassNameByComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                deleteOption,
                type,
            }),
            CloseIconContainer: getClassNameByComponent({
                component: 'CloseIconContainer',
                classPrefix,
                className,
                classNames,
                deleteOption,
                type,
            }),
        };
    }, [classPrefix, className, classNames, type, deleteOption]);

export default useTagClassName;
