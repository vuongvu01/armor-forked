import React, { ReactNode } from 'react';
import { isFragment } from 'react-is';
import { consoleWarn } from '../../../system/util/consoleWarn';

export const validateChildren = (children: ReactNode): ReactNode | null => {
    if (!children) {
        consoleWarn('Tooltip should have children to attach itself to.');
        return null;
    }

    if (Array.isArray(children)) {
        consoleWarn(
            'Tooltip component can only accept single-node child element. Wrap your nodes with a parent node.',
        );
        return null;
    }

    if (isFragment(children)) {
        consoleWarn(
            'Tooltip component does not support React.Fragment as a child node.',
        );
        return children;
    }

    if (typeof children === 'string' || typeof children === 'number') {
        return <span>{children}</span>;
    }

    return children;
};
