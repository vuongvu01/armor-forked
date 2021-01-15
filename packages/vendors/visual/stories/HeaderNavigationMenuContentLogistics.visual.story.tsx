import React from 'react';

import { HeaderNavigationMenuContentLogistics } from '../../src/components/HeaderNavigationMenuContentLogistics';

export default {
    title: 'HeaderNavigationMenuContentLogistics',
    component: HeaderNavigationMenuContentLogistics,
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
