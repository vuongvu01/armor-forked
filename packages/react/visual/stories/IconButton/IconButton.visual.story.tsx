import React from 'react';
import { ArrowUpIcon } from '@deliveryhero/armor-icons';

import { IconButton } from '../../../src/components';

export default {
    title: 'IconButton',
    component: IconButton,
};

export const Default = () => {
    return (
        <IconButton>
            <ArrowUpIcon medium />
        </IconButton>
    );
};

export const Light = () => {
    return (
        <IconButton light>
            <ArrowUpIcon medium />
        </IconButton>
    );
};
