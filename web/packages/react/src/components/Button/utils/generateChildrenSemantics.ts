import { Children, ReactNode } from 'react';
import get from 'lodash.get';

const isArmorIconComponent = (element: ReactNode) => {
    // TODO (nmelnikov 2020-07-10): this has to be read directly off of our own upcoming Icon component
    const elementName =
        get(element, 'type.displayName') || get(element, 'type');

    return typeof elementName === 'string' && elementName === 'MaterialIcon';
};

export type ChildrenSemanticsType = {
    count: number;
    isIconPresent: boolean;
    isIconFirst: boolean;
};

export type ButtonChildrenValidationType = {
    isValid: boolean;
    childStructure: ChildrenSemanticsType;
};

const generateChildrenSemantics = (
    children: ReactNode,
): ButtonChildrenValidationType => {
    const childrenCount = Children.count(children);
    const invalidSemantics = {
        isValid: false,
        childStructure: {
            count: 1,
            isIconPresent: false,
            isIconFirst: false,
        },
    };

    if (!children || childrenCount === 0 || childrenCount > 2) {
        return invalidSemantics;
    }

    if (childrenCount === 1) {
        if (typeof children === 'string') {
            return {
                isValid: true,
                childStructure: {
                    count: 1,
                    isIconPresent: false,
                    isIconFirst: false,
                },
            };
        }

        if (typeof children === 'object') {
            const isValid = isArmorIconComponent(children);
            return isValid
                ? {
                      isValid,
                      childStructure: {
                          count: 1,
                          isIconPresent: true,
                          isIconFirst: true,
                      },
                  }
                : invalidSemantics;
        }

        return invalidSemantics;
    }

    const childArray = Children.toArray(children);

    if (
        typeof childArray[0] === 'string' &&
        isArmorIconComponent(childArray[1])
    ) {
        return {
            isValid: true,
            childStructure: {
                count: 2,
                isIconFirst: false,
                isIconPresent: true,
            },
        };
    }

    if (
        isArmorIconComponent(childArray[0]) &&
        typeof childArray[1] === 'string'
    ) {
        return {
            isValid: true,
            childStructure: {
                count: 2,
                isIconFirst: true,
                isIconPresent: true,
            },
        };
    }

    return invalidSemantics;
};

export default generateChildrenSemantics;
