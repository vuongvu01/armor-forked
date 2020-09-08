import React, { ChangeEvent, useState } from 'react';

import { Radio, RadioGroup } from '../../../src/components';
import { GroupHelper } from '../../../src/helpers/GroupHelper';

export default {
    title: 'Radio',
    component: Radio,
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
                <Radio
                    name="radioName1"
                    value={value1}
                    label="Unchecked"
                    onChange={handleChecked}
                    selectedValue={firstItemIsChecked ? value1 : ''}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio
                    name="radioName2"
                    value={value2}
                    label="Checked"
                    selectedValue={value2}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio
                    name="radioName3"
                    value="3"
                    label="Disabled"
                    onChange={() => {}}
                    disabled
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio
                    name="radioName3"
                    value="3"
                    label="Disabled, checked"
                    disabled
                    selectedValue="3"
                />
            </GroupHelper>
        </>
    );
};

export const CustomLabelTypography = () => {
    return (
        <>
            <GroupHelper gap={2}>
                <RadioGroup
                    marginY={2}
                    name="name0"
                    typographyProps={{ paragraph: true, small: true }}
                >
                    <Radio
                        checked={false}
                        label="typographyProps={paragraph: true, small: true}"
                        value="0"
                    />
                    <Radio
                        checked
                        label="typographyProps={paragraph: true, small: true}"
                        value="1"
                    />
                </RadioGroup>
                <Radio
                    marginY={2}
                    name="name0"
                    label="typographyProps={paragraph: true, medium: true}"
                    typographyProps={{ paragraph: true, medium: true }}
                />
                <Radio
                    marginY={2}
                    name="name1"
                    label="typographyProps={paragraph: true, large: true}"
                    typographyProps={{ paragraph: true, large: true }}
                />
                <Radio
                    marginY={2}
                    name="name2"
                    label="typographyProps={label: true, small: true}"
                    typographyProps={{ label: true, small: true }}
                />
                <Radio
                    marginY={2}
                    name="name3"
                    label="typographyProps={label: true, medium: true}"
                    typographyProps={{ label: true, medium: true }}
                />
                <Radio
                    marginY={2}
                    name="name4"
                    label="typographyProps={label: true, large: true}"
                    selectedValue="val0"
                    typographyProps={{ label: true, large: true }}
                />
                <Radio
                    marginY={2}
                    name="name5"
                    label="typographyProps={subSectionTitle: true}"
                    typographyProps={{ subSectionTitle: true }}
                />
                <Radio
                    marginY={2}
                    name="name6"
                    label="typographyProps={sectionTitle: true}"
                    typographyProps={{ sectionTitle: true }}
                />
                <Radio
                    marginY={2}
                    name="name7"
                    label="typographyProps={pageTitle: true}"
                    typographyProps={{ pageTitle: true }}
                />
            </GroupHelper>
        </>
    );
};

export const DefaultStatesWithPreSelected = () => {
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
