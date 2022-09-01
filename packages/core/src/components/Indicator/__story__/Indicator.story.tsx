import React from 'react';

import { Indicator } from '../Indicator';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Indicator',
    component: Indicator,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => <Indicator />;
