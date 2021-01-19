// eslint-disable-next-line no-use-before-define
import React from 'react';
// eslint-disable-next-line import/no-unresolved
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
