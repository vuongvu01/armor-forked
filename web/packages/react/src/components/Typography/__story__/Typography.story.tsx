import React from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved

import { Typography } from '../Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <Typography>{text('Children', 'Hello world!')}</Typography>
);
