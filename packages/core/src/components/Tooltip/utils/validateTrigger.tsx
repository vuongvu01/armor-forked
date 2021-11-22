import React, { ReactElement } from 'react';
import { isFragment } from 'react-is';
import { consoleWarn } from '@deliveryhero/armor-system';

export const validateTrigger = (trigger: ReactElement): ReactElement | null => {
    if (!trigger) {
        consoleWarn(
            'Tooltip should have a trigger element to attach itself to.',
        );
        return null;
    }

    if (Array.isArray(trigger)) {
        consoleWarn(
            'Tooltip component can only accept single-node trigger element. Wrap your nodes with a parent element.',
        );
        return null;
    }

    if (isFragment(trigger)) {
        consoleWarn(
            'Tooltip component does not support React.Fragment as a trigger element.',
        );
        return trigger;
    }

    if (typeof trigger === 'string' || typeof trigger === 'number') {
        return <span>{trigger}</span>;
    }

    return trigger;
};
