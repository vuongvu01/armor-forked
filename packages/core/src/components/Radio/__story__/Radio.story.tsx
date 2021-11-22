import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Radio } from '../Radio';
import { RadioGroup } from '../RadioGroup';
import { Dropdown } from '../../Dropdown';
import { withWrapper } from '../../../helpers/Wrapper';
import { Stack } from '../../Stack';

export default {
    title: 'Components/Radio',
    component: Radio,
    decorators: [withKnobs, withWrapper],
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
                    onChange={handleChecked}
                    selectedValue={firstItemIsChecked ? value1 : ''}
                >
                    Pizza
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Checked</h4>
                <Radio name="radioName2" value={value2} selectedValue={value2}>
                    Pasta
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled</h4>
                <Radio name="radioName3" value="3" onChange={() => {}} disabled>
                    Pasta
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <h4>Disabled, checked</h4>
                <Radio name="radioName3" value="3" disabled selectedValue="3">
                    Pizza
                </Radio>
            </GroupHelper>
        </>
    );
};

export const RadioButtonGroupWithGroupMargin = () => {
    const groupName1 = 'radioName1';
    const [group1SelectedValue, setSelectedValueGroup1] = useState('');

    const handleChangeGroup1 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

        if (selectedValue) {
            setSelectedValueGroup1(selectedValue);
        }
    };

    return (
        <GroupHelper gap={2}>
            <h4>Radio group</h4>
            <RadioGroup
                marginY={6}
                name={groupName1}
                selectedValue={group1SelectedValue}
                onChange={handleChangeGroup1}
            >
                <Radio value="val1">Pizza</Radio>
                <Radio value="val2">Pasta</Radio>
                <Radio value="val3">Risotto</Radio>
            </RadioGroup>
        </GroupHelper>
    );
};

export const CustomLabelTypography = () => {
    return (
        <>
            <h4>Use one of the available typography types</h4>
            <GroupHelper gap={2}>
                <h4>
                    Pass custom label properties via{' '}
                    <code>typographyProps=</code> on Radio or RadioGroup
                </h4>
                <code>{`typographyProps={paragraph: true, small: true}`}</code>
                <RadioGroup
                    marginY={2}
                    name="name0"
                    typographyProps={{ paragraph: true, small: true }}
                >
                    <Radio checked={false} value="0">
                        Pizza
                    </Radio>
                    <Radio checked value="1">
                        Pasta
                    </Radio>
                </RadioGroup>
                <br />
                <br />
                <code>{`typographyProps={paragraph: true, medium: true}`}</code>
                <Radio
                    marginY={2}
                    name="name0"
                    typographyProps={{ paragraph: true, medium: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={paragraph: true, large: true}`}</code>
                <Radio
                    marginY={2}
                    name="name1"
                    typographyProps={{ paragraph: true, large: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={label: true, small: true}`}</code>
                <Radio
                    marginY={2}
                    name="name2"
                    typographyProps={{ label: true, small: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={label: true, medium: true}`}</code>
                <Radio
                    marginY={2}
                    name="name3"
                    typographyProps={{ label: true, medium: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={label: true, large: true}`}</code>
                <Radio
                    marginY={2}
                    name="name4"
                    selectedValue="val0"
                    typographyProps={{ label: true, large: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={subSectionTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name5"
                    typographyProps={{ subSectionTitle: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={sectionTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name6"
                    typographyProps={{ sectionTitle: true }}
                >
                    Pizza
                </Radio>
                <br />
                <code>{`typographyProps={pageTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name7"
                    typographyProps={{ pageTitle: true }}
                >
                    Pizza
                </Radio>
            </GroupHelper>
        </>
    );
};

export const DefaultStates = () => {
    const groupName2 = 'radioName2';
    const value2 = 'val2';
    const [group2SelectedValue, setSelectedValueGroup2] = useState(value2);

    const handleChangeGroup2 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

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
                <Radio value="val1">Pizza</Radio>
                <Radio value={value2}>Pasta</Radio>
                <Radio value="val3">Risotto</Radio>
                <Radio value="val4">Frittata</Radio>
                <Radio disabled value="val5">
                    Lasagne
                </Radio>
            </RadioGroup>
        </GroupHelper>
    );
};

export const DropdownAsAChild = () => {
    const groupName2 = 'radioName2';
    const value2 = 'val2';
    const [group2SelectedValue, setSelectedValueGroup2] = useState(value2);

    const handleChangeGroup2 = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event?.target?.value;

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
                <Radio value="val1">
                    Pizza <br />
                    <Dropdown
                        options={['Diavolo', 'Margherita', 'Frutti di mare']}
                        label="Dish type"
                        marginTop={2}
                    />
                </Radio>
                <Radio value={value2}>Pasta</Radio>
                <Radio value="val3">Risotto</Radio>
                <Radio value="val4">Frittata</Radio>
                <Radio disabled value="val5">
                    Lasagne
                </Radio>
            </RadioGroup>
        </GroupHelper>
    );
};
