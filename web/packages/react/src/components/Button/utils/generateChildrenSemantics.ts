import { Children, ReactElement, ReactNode } from 'react';
import { isElement } from 'react-is';

const isArmorIconComponent = (element: ReactElement) => {
    // TODO (nmelnikov 2020-07-10): this has to be read directly off of our own upcoming Icon component
    // TODO (nmelnikov 2020-08-05): think of a different logic for establishing child's type
    // @ts-ignore
    const elementName = element?.type?.displayName || element?.type;

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

        if (isElement(children)) {
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
        isElement(childArray[1]) &&
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
        isElement(childArray[0]) &&
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
