import React, { Children, ReactElement } from 'react';

export const injectTabIndex = (children: any, additionalProps?: object) =>
    Children.map(children, (child: ReactElement, tabIndex) => {
        return child
            ? React.cloneElement(child, { ...additionalProps, tabIndex })
            : null;
    });
