import React from 'react';
import {
    withKnobs,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-unresolved

import { Indicator } from '../Indicator';

export default {
    title: 'Components/Indicator',
    component: Indicator,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Indicator />;
