import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Dropdown } from '../Dropdown';
import { Box } from '../../Box';
import { Typography } from '../../Typography';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    decorators: [withKnobs],
    parameters: {},
};

const boxStyle: object = {
    backgroundColor: '#F4F4F8',
    height: '500px',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

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

const foodOptionsString = [
    'Pizza with a very long name that contains the list of ingredients',
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

export const MinimumConfiguration = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (option: any) => {
        setSelectedOption(option);
    };

    return (
        <>
            <GroupHelper gap={2}>
                <Box padding={3} style={boxStyle}>
                    <Dropdown
                        options={[
                            { value: 1, label: 'Pizza' },
                            { value: 2, label: 'Pasta' },
                            { value: 3, label: 'Risotto' },
                            { value: 4, label: 'Pepperoni' },
                        ]}
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
                <Box padding={3} style={boxStyle}>
                    <Dropdown
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
                <Box padding={3} style={boxStyle}>
                    <Dropdown
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
