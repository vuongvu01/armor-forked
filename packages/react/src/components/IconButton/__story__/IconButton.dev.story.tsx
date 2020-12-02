/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ArrowUpIcon } from '@deliveryhero/armor-icons/src';
import { IconButton } from '../IconButton';

export default {
    title: 'Components/IconButton',
    component: IconButton,
    decorators: [withKnobs],
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
