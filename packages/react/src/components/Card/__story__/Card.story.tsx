import React from 'react';
import {
    withKnobs,
    // eslint-disable-next-line import/no-unresolved
} from '@storybook/addon-knobs';

import { Card } from '../Card';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const Basic = () => <Card>Hello world!</Card>;
