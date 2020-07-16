import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Checkbox } from '../Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [withKnobs],
    parameters: {},
};

export const States = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Default</p>
                <Checkbox onChange={() => {}} label="add mozzarella" />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Checked by default</p>
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add olives"
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Default disabled</p>
                <Checkbox disabled label="add olives" />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Default checked disabled</p>
                <Checkbox
                    disabled
                    checked
                    onChange={() => {}}
                    label="add mozzarella"
                />
            </GroupHelper>
        </>
    );
};

export const Checkmarks = () => (
    <>
        <GroupHelper gap={2}>
            <p>Tick</p>
            <Checkbox
                defaultChecked
                onChange={() => {}}
                label="add mozzarella"
            />
        </GroupHelper>
        <GroupHelper gap={2}>
            <p>Dash</p>
            <Checkbox
                defaultChecked
                onChange={() => {}}
                checkedIcon="dash"
                label="add olives"
            />
        </GroupHelper>
        <GroupHelper gap={2}>
            <p>Disabled Tick</p>
            <Checkbox
                checked
                disabled
                onChange={() => {}}
                label="add mozzarella"
            />
        </GroupHelper>
        <GroupHelper gap={2}>
            <p>Disabled Dash</p>
            <Checkbox
                checked
                disabled
                onChange={() => {}}
                checkedIcon="dash"
                label="add olives"
            />
        </GroupHelper>
    </>
);