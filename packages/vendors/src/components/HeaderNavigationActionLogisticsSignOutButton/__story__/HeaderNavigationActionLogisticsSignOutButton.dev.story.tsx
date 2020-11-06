/* eslint-disable no-console,import/no-unresolved */

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { HeaderNavigationActionLogisticsSignOutButton } from '../HeaderNavigationActionLogisticsSignOutButton';

export default {
    title: 'Components/HeaderNavigationActionLogisticsSignOutButton',
    component: HeaderNavigationActionLogisticsSignOutButton,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    return <HeaderNavigationActionLogisticsSignOutButton />;
};
