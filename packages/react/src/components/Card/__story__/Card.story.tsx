import React from 'react';
import {
    withKnobs,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved

import { Card } from '../Card';

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Card>Hello world!</Card>;
