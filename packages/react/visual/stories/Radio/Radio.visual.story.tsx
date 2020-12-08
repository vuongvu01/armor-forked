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
                    onChange={handleChecked}
                    selectedValue={firstItemIsChecked ? value1 : ''}
                >
                    Unchecked
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio name="radioName2" value={value2} selectedValue={value2}>
                    Checked
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio name="radioName3" value="3" onChange={() => {}} disabled>
                    Disabled
                </Radio>
            </GroupHelper>
            <GroupHelper gap={2}>
                <Radio name="radioName3" value="3" disabled selectedValue="3">
                    Disabled, checked
                </Radio>
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
                        value="0"
                    >{`typographyProps={paragraph: true, small: true}`}</Radio>
                    <Radio
                        checked
                        value="1"
                    >{`typographyProps={paragraph: true, small: true}`}</Radio>
                </RadioGroup>
                <Radio
                    marginY={2}
                    name="name0"
                    typographyProps={{ paragraph: true, medium: true }}
                >{`typographyProps={paragraph: true, medium: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name1"
                    typographyProps={{ paragraph: true, large: true }}
                >{`typographyProps={paragraph: true, large: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name2"
                    typographyProps={{ label: true, small: true }}
                >{`typographyProps={label: true, small: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name3"
                    typographyProps={{ label: true, medium: true }}
                >{`typographyProps={label: true, medium: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name4"
                    selectedValue="val0"
                    typographyProps={{ label: true, large: true }}
                >
                    {`typographyProps={label: true, large: true}`}
                </Radio>
                <Radio
                    marginY={2}
                    name="name5"
                    typographyProps={{ subSectionTitle: true }}
                >{`typographyProps={subSectionTitle: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name6"
                    typographyProps={{ sectionTitle: true }}
                >{`typographyProps={sectionTitle: true}`}</Radio>
                <Radio
                    marginY={2}
                    name="name7"
                    typographyProps={{ pageTitle: true }}
                >{`typographyProps={pageTitle: true}`}</Radio>
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
