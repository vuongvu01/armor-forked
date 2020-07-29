import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Select } from '../Select';
import { Box } from '../../Box';
import { Typography } from '../../Typography';
import { Button } from '../../Button';

export default {
    title: 'Components/Select',
    component: Select,
    decorators: [withKnobs],
    parameters: {},
};

const boxStyle: object = {
    backgroundColor: '#F4F4F8',
    height: '500px',
    flexDirection: 'column',
};

export const MinimumConfiguration = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <Select
                options={['Pizza ', 'Pasta', 'Risotto', 'Pepperoni']}
                onSelectionChange={handleChange}
                label="Choose one"
            />
            <Typography paragraph>
                Selected value: {JSON.stringify(selectedOption)}
            </Typography>
        </>
    );
};

export const CustomOptionItemsFormat = () => {
    const foodOptions = [
        { value: 1, label: 'Pizza' },
        { value: 2, label: 'Pasta' },
        { value: 3, label: 'Risotto' },
        { value: 4, label: 'Pepperoni' },
        { value: 5, label: 'Pizza' },
        { value: 6, label: 'Pasta' },
        { value: 7, label: 'Risotto' },
        { value: 8, label: 'Pepperoni' },
        { value: 9, label: 'Pizza' },
        { value: 10, label: 'Pasta' },
        { value: 11, label: 'Risotto' },
        { value: 12, label: 'Pepperoni' },
        { value: 13, label: 'Pizza' },
        { value: 14, label: 'Pasta' },
        { value: 15, label: 'Risotto' },
        { value: 16, label: 'Pepperoni' },
    ];
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (option: any) => {
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
                    <code>{`{ value: 1, label: 'Pizza' },`}</code>
                </div>
                <div>
                    <code>{`{ value: 2, label: 'Pasta' },`}</code>
                </div>
                <div>
                    <code>{`{ value: 3, label: 'Risotto' },`}</code>
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
                    <Select
                        options={foodOptions}
                        onSelectionChange={handleChange}
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

export const PreselectedValue = () => {
    const foodOptionsString = [
        'Pizza',
        'Pasta',
        'Risotto',
        'Pepperoni',
        'Pizza',
        'Pasta',
        'Risotto',
        'Pepperoni',
        'Pizza',
        'Pizza',
        'Pasta',
        'Risotto',
        'Pepperoni',
        'Pizza',
        'Pasta',
        'Risotto',
        'Pepperoni',
        'Pizza',
    ];

    const initialSelectionIndex = 3;
    const [selectedOption, setSelectedOption] = useState(
        foodOptionsString[initialSelectionIndex],
    );
    const handleChange = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <GroupHelper gap={2}>
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <Select
                        options={foodOptionsString}
                        onSelectionChange={handleChange}
                        selectedIndex={initialSelectionIndex}
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

export const ErrorAndDisabledStatePropagation = () => {
    const initialSelectionIndex = 3;
    const options = ['Pizza', 'Pasta', 'Risotto', 'Pepperoni'];
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOptionLast, setSelectedOptionLast] = useState(
        options[initialSelectionIndex],
    );
    const [isDisabled, setIsDisabled] = useState(true);
    const handleChange = (option: any) => setSelectedOption(option);
    const handleOnSelectionChange = (option: any) =>
        setSelectedOptionLast(option);

    return (
        <>
            <p>
                Provide user feedback in case of an invalid or incomplete
                selection
            </p>
            <GroupHelper gap={2}>
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <div>
                        <Select
                            error={!selectedOption}
                            label="Select one"
                            options={options}
                            onSelectionChange={handleChange}
                        />
                        <Typography paragraph>
                            Selected value: {JSON.stringify(selectedOption)}
                        </Typography>
                    </div>
                    <br />
                    <br />
                    <Select
                        disabled
                        label="Disabled"
                        options={options}
                        onSelectionChange={handleChange}
                    />
                    <br />
                    <br />
                    <Select
                        disabled={isDisabled}
                        label={`${
                            isDisabled ? 'Disabled' : 'Enabled'
                        } with pre-selected`}
                        options={options}
                        onSelectionChange={handleOnSelectionChange}
                        selectedIndex={initialSelectionIndex}
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
