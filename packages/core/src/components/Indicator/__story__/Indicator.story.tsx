import React from 'react';
import {
    withKnobs,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';

import { Indicator } from '../Indicator';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Indicator',
    component: Indicator,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => <Indicator />;
