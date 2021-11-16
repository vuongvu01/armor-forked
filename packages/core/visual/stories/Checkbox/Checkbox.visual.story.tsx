import React from 'react';

import { Checkbox } from '../../../src/components';
import { GroupHelper } from '../../../src/helpers/GroupHelper';

export default {
    title: 'Checkbox',
    component: Checkbox,
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
            </GroupHelper>
            <GroupHelper
                gap={2}
                styles={{ display: 'flex', flexDirection: 'column' }}
            >
                <p>Checked dash by default</p>
                <Checkbox
                    defaultChecked
                    onChange={() => {}}
                    label="add olives"
                    checkedIcon="dash"
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
            <GroupHelper gap={2}>
                <p>Default checked dash disabled</p>
                <Checkbox
                    disabled
                    checked
                    onChange={() => {}}
                    checkedIcon="dash"
                    label="add mozzarella"
                />
            </GroupHelper>
        </>
    );
};
