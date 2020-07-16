import React from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved

import { Paper } from '../Paper';

export default {
    title: 'Components/Paper',
    component: Paper,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => (
    <Paper style={{ padding: '28px' }}>
        {text('Children', 'Hello world!')}
    </Paper>
);
