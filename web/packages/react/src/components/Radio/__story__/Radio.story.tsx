import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import get from 'lodash.get';

import { GroupHelper } from '../../../helpers/GroupHelper';
import Radio from '../Radio';
import { RadioGroup } from '../RadioGroup';

export default {
    title: 'Components/Radio',
    component: Radio,
    decorators: [withKnobs],
    parameters: {},
};

export const States = () => {
    const value1 = 'radio1';
    const value2 = 'radio2';
    const [firstItemIsChecked, setFirstItemIsChecked] = useState(false);

    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === value1) {
            setFirstItemIsChecked(true);
        }
    };

    return (
        <>
            <GroupHelper gap={2}>
                <h4>Unchecked</h4>
                <Radio
                    name="radioName1"
                    value={value1}
                    label="Pizza"
                    onChange={handleChecked}
                    selectedValue={firstItemIsChecked ? value1 : ''}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Checked</h4>
                <Radio
                    name="radioName2"
                    value={value2}
                    label="Pasta"
                    selectedValue={value2}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled</h4>
                <Radio
                    name="radioName3"
                    value="3"
                    label="Pasta"
                    onChange={() => {}}
                    disabled
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled, checked</h4>
                <Radio
                    name="radioName3"
                    value="3"
                    label="Pizza"
                    disabled
                    selectedValue="3"
                />
            </GroupHelper>
        </>
    );
};

export const RadioButtonGroup = () => {
    const groupName1 = 'radioName1';
    const [group1SelectedValue, setSelectedValueGroup1] = useState('');

    const handleChangeGroup1 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = get(event, 'target.value');

        if (selectedValue) {
            setSelectedValueGroup1(selectedValue);
        }
    };

    return (
        <GroupHelper gap={2}>
            <h4>Radio group</h4>
            <RadioGroup
                name={groupName1}
                selectedValue={group1SelectedValue}
                onChange={handleChangeGroup1}
            >
                <Radio value="val1" label="Pizza" />
                <Radio value="val2" label="Pasta" />
                <Radio value="val3" label="Risotto" />
            </RadioGroup>
        </GroupHelper>
    );
};

export const DefaultStates = () => {
    const groupName2 = 'radioName2';
    const value2 = 'val2';
    const [group2SelectedValue, setSelectedValueGroup2] = useState(value2);

    const handleChangeGroup2 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = get(event, 'target.value');

        if (selectedValue) {
            setSelectedValueGroup2(selectedValue);
        }
    };

    return (
        <GroupHelper gap={2}>
            <h4>Default states (pre-selected, disabled)</h4>
            <RadioGroup
                name={groupName2}
                selectedValue={group2SelectedValue}
                onChange={handleChangeGroup2}
            >
                <Radio value="val1" label="Pizza" />
                <Radio value={value2} label="Pasta" />
                <Radio value="val3" label="Risotto" />
                <Radio value="val4" label="Frittata" />
                <Radio disabled value="val5" label="Lasagne" />
            </RadioGroup>
        </GroupHelper>
    );
};
