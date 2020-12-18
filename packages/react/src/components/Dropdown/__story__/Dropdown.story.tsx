/* eslint-disable no-console,import/no-unresolved */

import React, { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Dropdown } from '../Dropdown';
import { FormField, FormFieldMessage, FormFieldTooltip } from '../../FormField';
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { Box } from '../../Box';
import { Typography } from '../../Typography';
import { ScalarType } from '../../../type';
import { OptionItemType } from '../type';
import { withWrapper } from '../../../helpers/Wrapper';


export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    decorators: [withKnobs, withWrapper],
    parameters: {},
};

const boxStyle: object = {
    backgroundColor: '#F4F4F8',
    height: '500px',
    flexDirection: 'column',
};

const foodOptions = [
    { value: -100, label: 'All food' },
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    { value: 2, label: 'Pho' },
    { value: 3, label: 'Risotto' },
    { value: 4, label: 'Pizza' },
    { value: 5, label: 'Enchiladas' },
    { value: 6, label: 'Börek' },
    { value: 7, label: 'Quiche' },
    { value: 8, label: 'Köfte' },
    { value: 9, label: 'Pad Thai' },
    { value: 10, label: 'Churrasco' },
    { value: 11, label: 'Baozi' },
    { value: 12, label: 'Ceviche' },
    { value: 13, label: 'Mac & Cheese' },
    { value: 14, label: 'Paella' },
    { value: 15, label: 'Dim sum' },
    { value: 16, label: 'Hamburger' },
    { value: 17, label: 'Ramen' },
    { value: 18, label: 'Sushi' },
    { value: 19, label: 'Burrito' },
];

const foodOptionsShort = [
    { value: 'BIR', label: 'Biryani' },
    {
        value: 'TAC',
        label:
            'Tacos. Log tacos. Tacos. Log tacos. Tacos. Log tacos. Tacos. Log tacos. Tacos. Log tacos. Tacos. Log tacos.',
    },
    { value: 'PHO', label: 'Pho' },
];

export const MinimumConfiguration = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <Dropdown
                options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                onSelect={handleSelect}
                label="Dish type"
            />
            <Typography paragraph>
                Selected value: {JSON.stringify(selectedOption)}
            </Typography>
        </>
    );
};

export const CustomOptionItemsFormat = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <GroupHelper gap={2}>
                <h4>
                    Using the following data. Only <code>label</code> is
                    mandatory.{' '}
                </h4>

                <div>
                    <code>{`[`}</code>
                </div>
                <div>
                    <code>{`{ value: 1, label: 'Biryani' },`}</code>
                </div>
                <div>
                    <code>{`{ value: 2, label: 'Tacos' },`}</code>
                </div>
                <div>
                    <code>{`{ value: 3, label: 'Pho' },`}</code>
                </div>
                <div>
                    <code>{`  [...]`}</code>
                </div>
                <div>
                    <code>{`]`}</code>
                </div>
                <br />
                <br />
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <Dropdown
                        options={foodOptions}
                        onSelect={handleSelect}
                        label="Dish type"
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
        </>
    );
};

export const Inline = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Dropdown
                options={foodOptions}
                label="Dish type A"
                marginRight={2}
            />
            <Dropdown options={foodOptions} label="Dish type B" />
        </>
    );
};

export const Uncontrolled = () => {
    const foodOptionsString = [
        'Biryani',
        'Tacos',
        'Pho',
        'Risotto',
        'Pizza',
        'Enchiladas',
        'Börek',
        'Quiche',
        'Köfte',
        'Pad Thai',
        'Churrasco',
        'Baozi',
        'Ceviche',
        'Mac & Cheese',
        'Paella',
        'Dim sum',
        'Hamburger',
        'Ramen',
        'Sushi',
        'Burrito',
    ];

    const initialSelectionIndex = 3;
    const [selectedOption, setSelectedOption] = useState(
        foodOptionsString[initialSelectionIndex],
    );
    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <GroupHelper gap={2}>
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <Dropdown
                        options={foodOptionsString}
                        onSelect={handleSelect}
                        defaultValue={initialSelectionIndex}
                        label="Dish type"
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
        </>
    );
};

export const UncontrolledMultiple = () => {
    const foodOptionsString = [
        'Biryani',
        'Tacos',
        'Pho',
        'Risotto',
        'Pizza',
        'Enchiladas',
        'Börek',
        'Quiche',
        'Köfte',
        'Pad Thai',
        'Churrasco',
        'Baozi',
        'Ceviche',
        'Mac & Cheese',
        'Paella',
        'Dim sum',
        'Hamburger',
        'Ramen',
        'Sushi',
        'Burrito',
    ];

    const initialSelectionIndex = [3, 6];

    return (
        <>
            <GroupHelper gap={2}>
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <Dropdown
                        options={foodOptionsString}
                        defaultValue={initialSelectionIndex}
                        label="Dish type"
                        multiple
                    />
                </Box>
            </GroupHelper>
        </>
    );
};

export const ErrorAndDisabledStatePropagation = () => {
    const initialSelectionIndex = 2;
    const options = ['Köfte', 'Pad Thai', 'Churrasco', 'Baozi'];
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOptionLast, setSelectedOptionLast] = useState(
        options[initialSelectionIndex],
    );
    const [isDisabled, setIsDisabled] = useState(true);
    const handleSelect = (option: any) => setSelectedOption(option);
    const handleonSelect = (option: any) => setSelectedOptionLast(option);
    return (
        <>
            <p>
                Provide user feedback in case of an invalid or incomplete
                selection
            </p>
            <GroupHelper gap={2}>
                <Box
                    padding={3}
                    style={{ flexDirection: 'column', width: '300px' }}
                >
                    <div>
                        <Dropdown
                            error={!selectedOption}
                            label="Select one"
                            options={options}
                            onSelect={handleSelect}
                        />
                        <Typography paragraph>
                            Selected value: {JSON.stringify(selectedOption)}
                        </Typography>
                    </div>
                    <br />
                    <br />
                    <Dropdown
                        disabled
                        label="Disabled"
                        options={options}
                        onSelect={handleSelect}
                    />
                    <br />
                    <br />
                    <Dropdown
                        disabled={isDisabled}
                        label={`${
                            isDisabled ? 'Disabled' : 'Enabled'
                        } with pre-selected`}
                        options={options}
                        onSelect={handleonSelect}
                        defaultValue={initialSelectionIndex}
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOptionLast)}
                    </Typography>
                    <Button onClick={() => setIsDisabled(!isDisabled)}>
                        {isDisabled ? 'Enable' : 'Disable'}
                    </Button>
                </Box>
            </GroupHelper>
        </>
    );
};

export const onChange = () => {
    const onChangeHandler = (value: any) => {
        console.log(value);
    };

    return (
        <>
            <Dropdown
                options={foodOptionsShort}
                onChange={onChangeHandler}
                label="Dish type"
            />
        </>
    );
};

export const Controlled = () => {
    const [value, setValue] = useState<any>();

    return (
        <>
            <Dropdown
                options={foodOptionsShort}
                onChange={event => setValue(event.target.value)}
                value={value}
                label="Dish type"
            />
        </>
    );
};

export const ControlledWithReset = () => {
    const options = [
        { value: 'BIR', label: 'Biryani' },
        { value: 'TAC', label: 'Tacos' },
        { value: 'PHO', label: 'Pho' },
    ];

    const [value, setValue] = useState<any>();

    const handleReset = () => setValue(null);

    return (
        <>
            <Dropdown
                options={options}
                onChange={event => setValue(event.target.value)}
                value={value}
                label="Dish type"
            />
            <Button marginLeft={5} onClick={handleReset}>
                Reset
            </Button>
        </>
    );
};

export const ControlledMultiple = () => {
    const [value, setValue] = useState<any>();

    return (
        <>
            <Dropdown
                options={foodOptionsShort}
                onChange={event => setValue(event.target.value)}
                value={value}
                label="Dish type"
                multiple
            />
        </>
    );
};

export const CustomDisplay = () => {
    return (
        <>
            <Dropdown
                options={foodOptionsShort}
                label="Dish type"
                multiple
                onRenderSelectedValue={(
                    value: ReadonlyArray<unknown>,
                    options: ReadonlyArray<unknown>,
                ) => {
                    return `${value.length} of ${options.length}`;
                }}
            />
        </>
    );
};

export const ChangeDefaultValue = () => {
    const [defaultValue, setDefaultValue] = useState('TAC');
    useEffect(() => {
        setTimeout(() => setDefaultValue('PHO'), 3000);
    }, []);

    return (
        <>
            <Dropdown
                options={foodOptionsShort}
                label="Dish type"
                defaultValue={defaultValue}
            />
            <input defaultValue={defaultValue} type="text" />
            <input value={defaultValue} type="text" />
        </>
    );
};

export const AraraCountries = () => {
    const [currentCountryId, setCurrentCountryId] = useState<number>(2);

    const countries = [
        { value: -1, label: 'All countries', code: null },
        { value: 2, label: 'Australia', code: 'au' },
        { value: 1, label: 'Austria', code: 'at' },
        { value: 3, label: 'Canada', code: 'ca' },
        { value: 5, label: 'Finland', code: 'fi' },
        { value: 6, label: 'France', code: 'fr' },
        { value: 4, label: 'Germany', code: 'de' },
        { value: 7, label: 'Italy', code: 'it' },
        { value: 8, label: 'Netherlands', code: 'nl' },
        { value: 9, label: 'Norway', code: 'no' },
        { value: 10, label: 'Sweden', code: 'se' },
    ];

    return (
        <>
            <Dropdown
                options={countries}
                label="Dish type"
                value={currentCountryId}
                onSelect={country => {
                    console.log(country);
                    // @ts-ignore
                    setCurrentCountryId(country.value);
                }}
            />
        </>
    );
};

export const Flat = () => {
    const options = ['Red', 'Blue', 'Green'];

    return (
        <>
            <Dropdown
                options={options}
                label="Color"
                onSelect={(color, index) => {
                    console.log(color);
                    console.log(index);
                }}
            />
        </>
    );
};

export const Objects = () => {
    const options = [
        { value: 3, label: 'Red', code: 'r' },
        { value: 'b', label: 'Blue', code: 'b' },
        { value: 5, label: 'Green', code: 'g' },
    ];

    return (
        <>
            <Dropdown
                options={options}
                label="Color"
                onSelect={(color, index) => {
                    console.log(color);
                    console.log(index);
                }}
            />
        </>
    );
};

export const FormWithErrors = () => {
    const options = [
        { value: 3, label: 'Red', code: 'r' },
        { value: 'b', label: 'Blue', code: 'b' },
        { value: 5, label: 'Green', code: 'g' },
    ];

    const errors = [
        'Need more beer',
        'Out of pretzels',
        'Something else!',
        'Test test!',
    ];

    return (
        <>
            <FormField autoMargin>
                <Dropdown
                    label="Type of entity"
                    autoComplete="off"
                    options={options}
                />
                <FormFieldMessage>asdfasdfdsdsafsd</FormFieldMessage>
            </FormField>
            <FormField autoMargin>
                <TextInput label="Blacklist - Email" wide multiline />
                {errors.length > 0 && (
                    <FormFieldMessage error oneLine={false}>
                        Errors: {errors.join(', ')}
                    </FormFieldMessage>
                )}
            </FormField>
        </>
    );
};

export const Wide = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <Box width="500px">
            <Dropdown
                options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                onSelect={handleSelect}
                label="Dish type"
                wide
            />
            <Typography paragraph>
                Selected value: {JSON.stringify(selectedOption)}
            </Typography>
        </Box>
    );
};

export const CustomOptionFormatMultiplePreSelectedExpandedList = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <Dropdown
            multiple
            options={foodOptions}
            label="Dish type"
            defaultValue={[2, 3]}
            formatOption={formatOption}
            isListExpanded={true}
        />
    );
};
