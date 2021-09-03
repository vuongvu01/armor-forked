import React from 'react';

import { Card } from '../Card';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => <Card>Hello world!</Card>;
