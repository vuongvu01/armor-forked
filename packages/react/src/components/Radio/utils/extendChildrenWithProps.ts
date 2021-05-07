import React, { Children } from 'react';

import { getElementName } from '../../../utils';
import { RADIO_CLASS_PREFIX } from '../constants';
import { RADIO_GROUP_CLASS_PREFIX } from '../RadioGroup';

export const extendChildrenWithProps = (
    children: React.ReactElement[],
    additionalProps: object,
) => {
    const values: any[] = [];

    const childrenWithExtendedProps = Children.map(children, child => {
        const childName = getElementName(child);
        const value = child?.props?.value;

        if (childName !== RADIO_CLASS_PREFIX) {
            console.error(
                `Only @armor/${RADIO_CLASS_PREFIX} components can be used as children of ${RADIO_GROUP_CLASS_PREFIX}`,
            );

            return null;
        }

        if (!value) {
            console.error(
                `Ensure that all @armor/${RADIO_CLASS_PREFIX} components have 'value' property set`,
            );

            return null;
        }

        values.push(value);

        return React.cloneElement(child, additionalProps);
    });

    const uniqueValues = Array.from(new Set(values));
    if (uniqueValues.length < Children.count(children)) {
        console.error(
            `Ensure that all @armor/${RADIO_CLASS_PREFIX} components have a unique 'value' property set`,
        );
    }

    return childrenWithExtendedProps;
};
