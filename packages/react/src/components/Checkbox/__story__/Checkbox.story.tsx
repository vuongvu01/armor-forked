import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Checkbox } from '../Checkbox';
import { withWrapper } from '../../../helpers/Wrapper';
import { Stack } from '../../Stack';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

export const AllStates = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Stack>
            <Checkbox onChange={() => {}} label="Unchecked" marginBottom={2} />
            <Checkbox
                defaultChecked
                onChange={() => {}}
                label="Checked [uncontrolled]"
                marginBottom={2}
            />
            <Checkbox
                defaultChecked
                checkedIcon="dash"
                onChange={() => {}}
                label="Partially selected [uncontrolled]"
                marginBottom={2}
            />
            <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                label="Checked"
                marginBottom={2}
            />
            <Checkbox
                checked={checked}
                // checkedIcon="dash"
                onChange={() => setChecked(!checked)}
                label="Partially selected"
                marginBottom={2}
            />
            <Checkbox
                onChange={() => {}}
                label="Unchecked disabled"
                marginBottom={2}
                disabled
            />
            <Checkbox
                defaultChecked
                onChange={() => {}}
                label="Checked disabled"
                marginBottom={2}
                disabled
            />
            <Checkbox
                defaultChecked
                checkedIcon="dash"
                onChange={() => {}}
                label="Partially selected disabled"
                marginBottom={2}
                disabled
            />
        </Stack>
    );
};

export const States = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <p>Default</p>
                <Checkbox onChange={() => {}} label="add mozzarella" />
            </GroupHelper>
            <GroupHelper
                gap={2}
                styles={{ display: 'flex', flexDirection: 'column' }}
            >
                <p>Checked by default</p>
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add olives"
                    marginBottom={2}
                />
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add mozzarella"
                    marginBottom={2}
                />
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add mozzarella"
                    marginBottom={2}
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

const MarginedCheckbox = styled(Checkbox)`
    margin-top: 30px;
`;

export const CustomCheckbox = () => {
    return <MarginedCheckbox />;
};
