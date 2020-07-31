import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Dropdown } from '../Dropdown';
import { Button } from '../../Button';
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
    flexDirection: 'column',
};

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
    const foodOptions = [
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

export const PreselectedValue = () => {
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