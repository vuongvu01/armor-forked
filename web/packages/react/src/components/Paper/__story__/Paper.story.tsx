import React from 'react';
import {
    withKnobs,
    text,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';

import { Paper } from '../Paper';

export default {
    title: 'Components/Paper',
    component: Paper,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Paper>{text('Children', 'Hello world!')}</Paper>;
