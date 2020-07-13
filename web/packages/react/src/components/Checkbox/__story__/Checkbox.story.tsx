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
    const [isDisabled, setDisabled] = useState(false);
    return (
        <>
            <GroupHelper gap={4}>
                <p>Default</p>
                <Checkbox onChange={() => {}} />
            </GroupHelper>
            <GroupHelper gap={4}>
                <p>Checked by default</p>
                <Checkbox defaultChecked onChange={() => {}} />
            </GroupHelper>
            <GroupHelper gap={4}>
                <p>External control</p>
                <Button small onClick={() => setChecked(!isChecked)}>
                    On / Off
                </Button>
                <Button small onClick={() => setDisabled(!isDisabled)}>
                    Disable / Enable
                </Button>
                <Checkbox
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={() => {}}
                />
            </GroupHelper>
            <GroupHelper gap={4}>
                <p>Default disabled</p>
                <Checkbox disabled />
            </GroupHelper>
            <GroupHelper gap={4}>
                <p>Default checked disabled</p>
                <Checkbox disabled checked onChange={() => {}} />
            </GroupHelper>
        </>
    );
};

export const CheckStyles = () => (
    <>
        <GroupHelper gap={4}>
            <p>Tick</p>
            <Checkbox defaultChecked onChange={() => {}} />
        </GroupHelper>
        <GroupHelper gap={4}>
            <p>Dash</p>
            <Checkbox defaultChecked onChange={() => {}} checkedIcon="dash" />
        </GroupHelper>
        <GroupHelper gap={4}>
            <p>Disabled Tick</p>
            <Checkbox checked disabled onChange={() => {}} />
        </GroupHelper>
        <GroupHelper gap={4}>
            <p>Disabled Dash</p>
            <Checkbox checked disabled onChange={() => {}} checkedIcon="dash" />
        </GroupHelper>
    </>
);
