import React, { Children, ReactElement } from 'react';

import { TAB_CLASS_PREFIX } from '../../Tab/constants';

const isValidTabComponent = (element: ReactElement) => {
    // @ts-ignore
    const elementName = element?.type?.displayName || element?.type;

    return typeof elementName === 'string' && elementName === TAB_CLASS_PREFIX;
};

const preProcessTabChildren = (children: any, additionalProps: object) =>
    Children.map(children, (child: ReactElement, tabIndex) => {
        if (!isValidTabComponent(child)) {
            return null;
        }

        return child
            ? React.cloneElement(child, { ...additionalProps, tabIndex })
            : null;
    });

export default preProcessTabChildren;
