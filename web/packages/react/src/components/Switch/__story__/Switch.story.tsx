import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Switch } from '../Switch';
import { Button } from '../../Button';

export default {
    title: 'Components/Switch',
    component: Switch,
    decorators: [withKnobs],
    parameters: {},
};

const gap = 1.5;

export const Types = () => {
    const [isChecked, setChecked] = useState(true);
    const [isDisabled, setDisabled] = useState(false);

    return (
        <>
            <h2>Possible States</h2>
            <GroupHelper gap={gap}>
                <p>Enabled / OFF</p>
                <Switch onChange={() => {}} />
            </GroupHelper>
            <GroupHelper gap={gap}>
                <p>Enabled / ON by default</p>
                <Switch defaultChecked onChange={() => {}} />
            </GroupHelper>
            <GroupHelper gap={gap}>
                <p>External control</p>
                <Button onClick={() => setChecked(!isChecked)}>Toggle</Button>
                <Button onClick={() => setDisabled(!isDisabled)}>
                    Disable/Enable
                </Button>
                <Switch checked={isChecked} disabled={isDisabled} />
            </GroupHelper>
            <GroupHelper gap={gap}>
                <p>Disabled / OFF</p>
                <Switch disabled onChange={() => {}} />
            </GroupHelper>
            <GroupHelper gap={gap}>
                <p>Disabled / ON</p>
                <Switch defaultChecked disabled onChange={() => {}} />
            </GroupHelper>
        </>
    );
};
