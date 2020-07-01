import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from 'src/helpers/GroupHelper';
import { Switch } from '../Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
    decorators: [withKnobs],
    parameters: {},
};

const gap = 1.5;

export const Types = () => (
    <>
        <h2>Possible States</h2>
        <GroupHelper gap={gap}>
            <p>OFF / Enabled</p>
            <Switch onChange={() => {}} />
        </GroupHelper>
        <GroupHelper gap={gap}>
            <p>ON / Enabled</p>
            <Switch checked onChange={() => {}} />
        </GroupHelper>
        <GroupHelper gap={gap}>
            <p>ON / Disabled</p>
            <Switch defaultChecked disabled onChange={() => {}} />
        </GroupHelper>
        <GroupHelper gap={gap}>
            <p>OFF / Disabled</p>
            <Switch disabled onChange={() => {}} />
        </GroupHelper>
    </>
);
