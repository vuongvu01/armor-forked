import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Radio } from '../Radio';

export default {
    title: 'Components/Radio',
    component: Radio,
    decorators: [withKnobs],
    parameters: {},
};

export const States = () => (
    <>
        <h4>Unchecked</h4>
        <GroupHelper gap={2}>
            <Radio name="radioName1" value="1" onChange={() => {}} />
        </GroupHelper>
        <h4>Checked</h4>
        <GroupHelper gap={2}>
            <Radio name="radioName2" value="2" onChange={() => {}} checked />
        </GroupHelper>
        <h4>Disabled</h4>
        <GroupHelper gap={2}>
            <Radio name="radioName3" value="3" onChange={() => {}} disabled />
        </GroupHelper>
        <h4>Disabled checked</h4>
        <GroupHelper gap={2}>
            <Radio
                name="radioName3"
                value="3"
                onChange={() => {}}
                disabled
                checked
            />
        </GroupHelper>
    </>
);

export const RadioGroup = () => (
    <>
        <h4>Radio group</h4>
        <GroupHelper gap={2}>
            <Radio name="radioName1" value="1" onChange={() => {}} />
        </GroupHelper>
        <h4>Pre-selected value</h4>
        <GroupHelper gap={2}>
            <Radio name="radioName2" value="1" onChange={() => {}} />
        </GroupHelper>
    </>
);
