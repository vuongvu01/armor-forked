import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';
import get from 'lodash.get';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Radio } from '../Radio';
import { RadioGroup } from '../RadioGroup';
import { Button } from '../../Button';

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
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

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
                    onChange={handleChecked}
                    selectedValue={firstItemIsChecked ? value1 : ''}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Checked</h4>
                <Radio
                    name="radioName2"
                    value={value2}
                    selectedValue={value2}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>External control</h4>
                <Button onClick={() => setIsChecked(!isChecked)}>Toggle</Button>
                <Button onClick={() => setDisabled(!isDisabled)} marginLeft={2}>
                    Disable/Enable
                </Button>
                <Radio
                    name="radioName12"
                    value="2"
                    onChange={() => {}}
                    selectedValue={isChecked ? '2' : ''}
                    disabled={isDisabled}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled</h4>
                <Radio
                    name="radioName3"
                    value="3"
                    onChange={() => {}}
                    disabled
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled, checked</h4>
                <Radio name="radioName3" value="3" disabled selectedValue="3" />
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
                <Radio value="val1" />
                <Radio value="val2" />
                <Radio value="val3" />
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
            <h4>Default states (pre-selected and disabled)</h4>
            <RadioGroup
                name={groupName2}
                selectedValue={group2SelectedValue}
                onChange={handleChangeGroup2}
            >
                <Radio value="val1" />
                <Radio value={value2} />
                <Radio value="val3" />
                <Radio value="val4" />
                <Radio disabled value="val5" />
            </RadioGroup>
        </GroupHelper>
    );
};
