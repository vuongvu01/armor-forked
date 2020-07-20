import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tab } from '../Tab';

export default {
    title: 'Components/Tab',
    component: Tab,
    decorators: [withKnobs],
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
