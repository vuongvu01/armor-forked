import { Children, cloneElement, isValidElement, ReactNode } from 'react';
import { ICON_COMPONENT_SUFFIX, ICON_DEFAULT_PROPS } from './constants';
import { GetIconProps } from './types';

function getChildrenWithIconProps<T = Record<string, unknown>>(
    baseChildren: ReactNode,
    getIconProps: GetIconProps,
): ReturnType<typeof Children.toArray> {
    const children = Children.toArray(baseChildren);
    const childrenCount = children.length;

    return children.map((child: any, index) => {
        const isValidChild = isValidElement(child);
        const isIcon = child?.type?.displayName?.endsWith?.(
            ICON_COMPONENT_SUFFIX,
        );

        if (!isValidChild || !isIcon) {
            return child;
        }

        return cloneElement(child, {
            // allow to pass other props to the icon
            ...((child?.props as T) || {}),

            // reset default icon props
            ...ICON_DEFAULT_PROPS,

            // override icon props
            ...getIconProps(childrenCount, index),
        });
    });
}

export default getChildrenWithIconProps;
