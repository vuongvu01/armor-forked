import { Children, ReactNode } from 'react';
import get from 'lodash.get';

const isArmorIconComponent = (element: ReactNode) => {
    // TODO (nmelnikov 2020-07-10): this has to be read directly off of our own upcoming Icon component
    const elementName =
        get(element, 'type.displayName') || get(element, 'type');

    return typeof elementName === 'string' && elementName === 'MaterialIcon';
};

const isValidChildrenStructure = (children: ReactNode) => {
    const childrenCount = Children.count(children);

    if (!children || childrenCount === 0 || childrenCount > 2) {
        return false;
    }

    if (childrenCount === 1) {
        if (typeof children === 'string') {
            return true;
        }

        if (typeof children === 'object') {
            return isArmorIconComponent(children);
        }

        return false;
    }

    const childArray = Children.toArray(children);

    return (
        (typeof childArray[0] === 'string' &&
            isArmorIconComponent(childArray[1])) ||
        (isArmorIconComponent(childArray[0]) &&
            typeof childArray[1] === 'string')
    );
};

export default isValidChildrenStructure;
