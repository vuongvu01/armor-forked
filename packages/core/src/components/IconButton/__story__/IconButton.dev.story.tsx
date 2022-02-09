/* eslint-disable no-console,import/no-unresolved */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowUpIcon } from '@deliveryhero/armor-icons';

import { IconButton } from '../IconButton';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/IconButton',
    component: IconButton,
    decorators: [withWrapper],
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

export const ColorInherit = () => {
    return (
        <div
            style={{
                color: 'red',
                backgroundColor: 'black',
                padding: '30px',
            }}
        >
            <IconButton light color="inherit">
                <ArrowUpIcon medium />
            </IconButton>
        </div>
    );
};
