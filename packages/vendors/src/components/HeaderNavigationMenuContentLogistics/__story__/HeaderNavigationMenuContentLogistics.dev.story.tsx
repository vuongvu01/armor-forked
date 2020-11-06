/* eslint-disable no-console,import/no-unresolved */

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { HeaderNavigationMenuContentLogistics } from '../HeaderNavigationMenuContentLogistics';

export default {
    title: 'Components/HeaderNavigationMenuContentLogistics',
    component: HeaderNavigationMenuContentLogistics,
    decorators: [withKnobs],
    parameters: {},
};

export const Basic = () => {
    return <HeaderNavigationMenuContentLogistics />;
};

export const SelectedApplications = () => {
    return (
        <HeaderNavigationMenuContentLogistics
            displayedApplicationCodes={[
                'hurrier.superuser',
                'arara.superuser',
                'user-api.superuser',
            ]}
        />
    );
};
