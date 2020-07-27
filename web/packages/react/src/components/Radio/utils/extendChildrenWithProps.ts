import React, { Children } from 'react';
import get from 'lodash.get';
import uniq from 'lodash.uniq';

import { RADIO_CLASS_PREFIX } from '../constants';
import { RADIO_GROUP_CLASS_PREFIX } from '../RadioGroup';

const extendChildrenWithProps = (
    children: React.ReactElement[],
    additionalProps: object,
) => {
    const values: any[] = [];

    const childrenWithExtendedProps = Children.map(children, child => {
        const childName =
            get(child, 'props.originalType.displayName') ||
            get(child, 'type.displayName') ||
            get(child, 'type');
        const value = get(child, 'props.value');

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

    if (uniq(values).length < Children.count(children)) {
        console.error(
            `Ensure that all @armor/${RADIO_CLASS_PREFIX} components have a unique 'value' property set`,
        );
    }

    return childrenWithExtendedProps;
};

export default extendChildrenWithProps;
