import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved
import { action } from '@storybook/addon-actions';

import { Paper } from '../Paper';

export default {
    title: 'Components/Paper',
    component: Paper,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Paper>{text('Children', 'Hello world!')}</Paper>;
