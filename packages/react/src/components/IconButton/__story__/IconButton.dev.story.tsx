/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowUpIcon } from '@deliveryhero/armor-icons';

import { IconButton } from '../IconButton';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/IconButton',
    component: IconButton,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => {
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
