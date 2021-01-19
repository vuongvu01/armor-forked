import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { HeaderNavigationMenuTitleHurrier } from '../HeaderNavigationMenuTitleHurrier';

export default {
    title: 'Components/HeaderNavigationMenuTitleHurrier',
    component: HeaderNavigationMenuTitleHurrier,
    decorators: [withKnobs],
    parameters: {},
};

export const HurrierMenu = () => {
    return <HeaderNavigationMenuTitleHurrier />;
};
