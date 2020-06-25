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

import { Indicator } from '../Indicator';

export default {
    title: 'Components/Indicator',
    component: Indicator,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <Indicator />;
