import { useMemo } from 'react';

import {
    ClassBasedOnComponentType,
    TagDeleteIconModeType,
    TagType,
} from '../type';
import { appendClassName, makeBEM } from '../../../utils';
import isStatusTag from './isStatusTag';

const getClassNameByComponent = ({
    component,
    classPrefix,
    deleteOption,
    type,
    small,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (type) {
        stateClassNames.push(makeBEM(classPrefix, component, type));
    }

    if (small) {
        stateClassNames.push(makeBEM(classPrefix, component, 'small'));
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
    deleteOption?: TagDeleteIconModeType,
    type?: TagType,
    small?: boolean,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                    deleteOption,
                    type,
                    small,
                }),
                className,
            ),
            Label: appendClassName(
                getClassNameByComponent({
                    component: 'Label',
                    classPrefix,
                    deleteOption,
                    type,
                    small,
                }),
                className,
            ),
            CloseIconContainer: getClassNameByComponent({
                component: 'CloseIconContainer',
                classPrefix,
                deleteOption,
                type,
                small,
            }),
            CloseIcon: getClassNameByComponent({
                component: 'CloseIcon',
                classPrefix,
                deleteOption,
                type,
                small,
            }),
        };
    }, [classPrefix, className, type, deleteOption]);

export default useTagClassName;
