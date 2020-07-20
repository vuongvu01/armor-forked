import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import Tab from '../Tab';

export default {
    title: 'Components/Tab',
    component: Tab,
    decorators: [withKnobs],
    parameters: {},
};

export const States = () => (
    <>
        <GroupHelper gap={2}>
            <Tab label="Tab 1" selectedValue={1} value={1} />
            <Tab label="Tab 2" disabled value={2} />
            <Tab label="Tab 3" value={3} />
        </GroupHelper>
    </>
);
