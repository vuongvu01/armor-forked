import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import {
    ClassBasedOnComponentType,
    TagDeleteIconModeType,
    TagType,
} from '../type';
import isStatusTag from './isStatusTag';

const getClassNameByComponent = ({
    component,
    classPrefix,
    deleteOption,
    type,
    small,
    filled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (type) {
        stateClassNames.push(makeBEM(classPrefix, component, type));
    }

    if (filled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'filled'));
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
    filled?: boolean,
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
                    filled,
                }),
                className,
            ),
            Label: getClassNameByComponent({
                component: 'Label',
                classPrefix,
                deleteOption,
                type,
                small,
                filled,
            }),
            CloseIconContainer: getClassNameByComponent({
                component: 'CloseIconContainer',
                classPrefix,
                deleteOption,
                type,
                small,
                filled,
            }),
            CloseIcon: getClassNameByComponent({
                component: 'CloseIcon',
                classPrefix,
                deleteOption,
                type,
                small,
                filled,
            }),
        };
    }, [classPrefix, deleteOption, type, small, filled, className]);

export default useTagClassName;
