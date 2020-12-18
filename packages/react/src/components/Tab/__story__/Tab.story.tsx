import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Tab } from '../Tab';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Tab',
    component: Tab,
    decorators: [withKnobs, withWrapper],
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
