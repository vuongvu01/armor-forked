import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Checkbox } from '../Checkbox';
import { Button } from '../../Button';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [withKnobs],
    parameters: {},
};

export const States = () => {
    const [isChecked, setChecked] = useState(true);
    return (
        <>
            <h4>Default</h4>
            <GroupHelper gap={2}>
                <Checkbox onChange={() => {}} />
            </GroupHelper>
            <h4>Checked by default</h4>
            <GroupHelper gap={2}>
                <Checkbox defaultChecked onChange={() => {}} />
            </GroupHelper>
            <h4>Checked (external control)</h4>
            <GroupHelper gap={2}>
                <Checkbox checked={isChecked} onChange={() => {}} />
                <Button onClick={() => setChecked(!isChecked)}>
                    Change checkbox state
                </Button>
            </GroupHelper>
            <h4>Default disabled</h4>
            <GroupHelper gap={2}>
                <Checkbox disabled />
            </GroupHelper>
            <h4>Default checked disabled</h4>
            <GroupHelper gap={2}>
                <Checkbox disabled checked onChange={() => {}} />
            </GroupHelper>
        </>
    );
};

export const CheckStyles = () => (
    <>
        <h4>Tick</h4>
        <GroupHelper gap={2}>
            <Checkbox defaultChecked onChange={() => {}} />
        </GroupHelper>
        <h4>Dash</h4>
        <GroupHelper gap={2}>
            <Checkbox defaultChecked onChange={() => {}} checkedIcon="dash" />
        </GroupHelper>
        <h4>Disabled Tick</h4>
        <GroupHelper gap={2}>
            <Checkbox checked disabled onChange={() => {}} />
        </GroupHelper>
        <h4>Disabled Dash</h4>
        <GroupHelper gap={2}>
            <Checkbox checked disabled onChange={() => {}} checkedIcon="dash" />
        </GroupHelper>
    </>
);
