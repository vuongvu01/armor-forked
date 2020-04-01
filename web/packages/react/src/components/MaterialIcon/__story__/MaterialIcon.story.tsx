import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs, text } from '@storybook/addon-knobs';

import { MaterialIcon } from '../MaterialIcon';

export default {
    title: 'Components/MaterialIcon',
    component: MaterialIcon,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => <MaterialIcon>{text('Icon', 'save')}</MaterialIcon>;
