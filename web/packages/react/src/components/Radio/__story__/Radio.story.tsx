import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

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
        const selectedValue = event?.target?.value;

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
                <Radio value="val1" label="Pizza" data-testid="123" />
                <Radio value="val2" label="Pasta" />
                <Radio value="val3" label="Risotto" />
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
                    <Radio checked={false} label="Pizza" value="0" />
                    <Radio checked label="Pasta" value="1" />
                </RadioGroup>
                <br />
                <br />
                <code>{`typographyProps={paragraph: true, medium: true}`}</code>
                <Radio
                    marginY={2}
                    name="name0"
                    label="Pizza"
                    typographyProps={{ paragraph: true, medium: true }}
                />
                <br />
                <code>{`typographyProps={paragraph: true, large: true}`}</code>
                <Radio
                    marginY={2}
                    name="name1"
                    label="Pizza"
                    typographyProps={{ paragraph: true, large: true }}
                />
                <br />
                <code>{`typographyProps={label: true, small: true}`}</code>
                <Radio
                    marginY={2}
                    name="name2"
                    label="Pizza"
                    typographyProps={{ label: true, small: true }}
                />
                <br />
                <code>{`typographyProps={label: true, medium: true}`}</code>
                <Radio
                    marginY={2}
                    name="name3"
                    label="Pizza"
                    typographyProps={{ label: true, medium: true }}
                />
                <br />
                <code>{`typographyProps={label: true, large: true}`}</code>
                <Radio
                    marginY={2}
                    name="name4"
                    label="Pizza"
                    selectedValue="val0"
                    typographyProps={{ label: true, large: true }}
                />
                <br />
                <code>{`typographyProps={subSectionTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name5"
                    label="Pizza"
                    typographyProps={{ subSectionTitle: true }}
                />
                <br />
                <code>{`typographyProps={sectionTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name6"
                    label="Pizza"
                    typographyProps={{ sectionTitle: true }}
                />
                <br />
                <code>{`typographyProps={pageTitle: true}`}</code>
                <Radio
                    marginY={2}
                    name="name7"
                    label="Pizza"
                    typographyProps={{ pageTitle: true }}
                />
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
                <Radio marginBottom={10} value="val1" label="Pizza" />
                <Radio value={value2} label="Pasta" />
                <Radio value="val3" label="Risotto" />
                <Radio value="val4" label="Frittata" />
                <Radio disabled value="val5" label="Lasagne" />
            </RadioGroup>
        </GroupHelper>
    );
};
