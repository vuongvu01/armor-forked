import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Select } from '../Select';
import { Box } from '../../Box';
import { Typography } from '../../Typography';

export default {
    title: 'Components/Select',
    component: Select,
    decorators: [withKnobs],
    parameters: {},
};

const boxStyle: object = {
    backgroundColor: '#F4F4F8',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

export const MinimumConfiguration = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <GroupHelper gap={2}>
                <Box padding={3} style={boxStyle}>
                    <Select
                        options={['Pizza', 'Pasta', 'Risotto', 'Pepperoni']}
                        onSelectionChange={handleChange}
                        label="Choose one"
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
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
                        label="Choose one"
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
                        label="Choose one"
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
        </>
    );
};

export const ErrorPropagation = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <p>
                Provide user feedback in case of an invalid or incomplete
                selection
            </p>
            <GroupHelper gap={2}>
                <Box padding={3} style={{ ...boxStyle, width: '300px' }}>
                    <Select
                        error={!selectedOption}
                        options={['Pizza', 'Pasta', 'Risotto', 'Pepperoni']}
                        onSelectionChange={handleChange}
                        label="Choose one"
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
        </>
    );
};
