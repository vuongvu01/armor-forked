import React from 'react';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tab } from '../Tab';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Tab',
    component: Tab,
    decorators: [withWrapper],
    parameters: {},
};

export const States = () => (
    <>
        <GroupHelper gap={2}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" disabled />
            <Tab label="Tab 3" />
        </GroupHelper>
    </>
);
