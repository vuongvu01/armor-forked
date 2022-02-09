// eslint-disable-next-line no-use-before-define
import React from 'react';

import { HeaderNavigationMenuContentLogistics } from '../HeaderNavigationMenuContentLogistics';

export default {
    title: 'Components/HeaderNavigationMenuContentLogistics',
    component: HeaderNavigationMenuContentLogistics,
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
