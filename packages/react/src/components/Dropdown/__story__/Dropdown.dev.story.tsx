/* eslint-disable no-console,import/no-unresolved */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import { GroupHelper } from '../../../helpers/GroupHelper';
import { Dropdown } from '../Dropdown';
import { FormField, FormFieldMessage } from '../../FormField';
import { TextInput } from '../../TextInput';
import { Button } from '../../Button';
import { Box } from '../../Box';
import { Typography } from '../../Typography';
import {
    DropdownOnChangeEventType,
    DropdownSelectedOptionType,
    OptionItemType,
} from '../type';
import { withWrapper } from '../../../helpers/Wrapper';
import { Pack, PackItem } from '../../Pack';
import { Dialog, DialogContent } from '../../Dialog';

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
    { value: 3, label: 'Pâté of roasted indigenous legumes' },
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

const foodOptionsString = [
    'Biryani',
    'Tacos',
    'Pho',
    'Pâté of roasted indigenous legumes',
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

export const MinimumConfiguration = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        console.log('story handleSelect', { option });
        setSelectedOption(option);
    };

    return (
        <>
            <Dropdown
                options={[
                    'Biryani',
                    'Tacos',
                    'Pho',
                    'Pâté of roasted indigenous legumes',
                ]}
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
                    <FormField autoMargin>
                        <Dropdown
                            options={foodOptions}
                            onSelect={handleSelect}
                            label="Dish type"
                        />
                        <FormFieldMessage>
                            This is a read-only field
                        </FormFieldMessage>
                    </FormField>

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
            <Dropdown margin={1} options={foodOptions} label="Single option" />

            <Dropdown
                margin={1}
                options={foodOptions}
                label="Multiple options"
                multiple
                maxWidth="400px"
                enableSelectAllOption
                enableSearchOption
            />

            <Dropdown
                options={foodOptions}
                label="Dish type A"
                margin={1}
                width="sm"
            />
        </>
    );
};

export const UncontrolledWithSearch = () => {
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
                        enableSearchOption
                        enableSelectAllOption
                    />
                    <Typography paragraph>
                        Selected value: {JSON.stringify(selectedOption)}
                    </Typography>
                </Box>
            </GroupHelper>
        </>
    );
};

const FullWidthDropdown = styled(Dropdown)`
    width: 100%;
`;

export const FullWidth = () => {
    const initialSelectionIndex = 1;
    const initialSelectionMultiple = [1, 2, 3];
    const [selectedOption, setSelectedOption] = useState(
        foodOptionsString[initialSelectionIndex],
    );
    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };
    const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>(
        initialSelectionMultiple,
    );
    const selectedFoodOptions = selectedItemIndex.map(
        index => foodOptionsString[index],
    );
    const [selectedOptions, setSelectedOptions] = useState<
        DropdownSelectedOptionType[]
    >(selectedFoodOptions);

    return (
        <>
            <FullWidthDropdown
                options={foodOptionsString}
                onSelect={handleSelect}
                defaultValue={initialSelectionIndex}
                label="Dish type"
            />
            <Typography paragraph>
                Selected value: {JSON.stringify(selectedOption)}
            </Typography>
            <br />
            <br />
            <FullWidthDropdown
                options={foodOptionsString}
                onSelect={handleSelect}
                defaultValue={initialSelectionMultiple}
                label="Dish type"
                enableSearchOption
                enableSelectAllOption
                multiple
            />
            <Box marginTop={4}>
                <Typography label small>
                    Selected options:
                </Typography>
                <Typography>{selectedOptions.join(', ')}</Typography>
                <Typography label small>
                    Selected option indices:
                </Typography>
                <Typography>[{selectedItemIndex.join(', ')}]</Typography>
            </Box>
        </>
    );
};

export const UncontrolledMultiple = () => {
    const initialSelectionIndex = [2, 6, 7, 8];

    const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>(
        initialSelectionIndex,
    );
    const selectedFoodOptions = selectedItemIndex.map(
        index => foodOptionsString[index],
    );
    const [selectedOptions, setSelectedOptions] = useState<
        DropdownSelectedOptionType[]
    >(selectedFoodOptions);

    const handleOnChange = (event: any) => {
        const selectedIndices = event.target.value;

        const nextFoodOptions = selectedIndices.map(
            (index: number) => foodOptionsString[index],
        );

        setSelectedItemIndex(selectedIndices);
        setSelectedOptions(nextFoodOptions);
    };

    return (
        <Pack>
            <PackItem>
                <Box padding={3} style={{ width: '400px' }}>
                    <Dropdown
                        options={foodOptionsString}
                        defaultValue={initialSelectionIndex}
                        onChange={handleOnChange}
                        label="Dish type"
                        multiple
                        enableSelectAllOption
                        enableSearchOption
                    />
                </Box>
            </PackItem>
            <PackItem>
                <Box marginLeft={4}>
                    <Typography label small>
                        Selected options:
                    </Typography>
                    <Typography>{selectedOptions.join(', ')}</Typography>
                    <Typography label small>
                        Selected option indices:
                    </Typography>
                    <Typography>[{selectedItemIndex.join(', ')}]</Typography>
                </Box>
            </PackItem>
        </Pack>
    );
};

export const MultipleWithSpecifiedNumberOfOpenTagsAndCustomAggregatedTagsCountLabel = () => {
    const initialSelectionIndex: number[] = [];

    const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>(
        initialSelectionIndex,
    );
    const selectedFoodOptions = selectedItemIndex.map(
        index => foodOptionsString[index],
    );
    const [selectedOptions, setSelectedOptions] = useState<
        DropdownSelectedOptionType[]
    >(selectedFoodOptions);

    const handleOnChange = (event: any) => {
        const selectedIndices = event.target.value;

        const nextFoodOptions = selectedIndices.map(
            (index: number) => foodOptionsString[index],
        );

        setSelectedItemIndex(selectedIndices);
        setSelectedOptions(nextFoodOptions);
    };

    const handleRenderAggregatedTagsLabel = (aggregatedTagsCount: number) =>
        `+ ${aggregatedTagsCount} more`;

    return (
        <Pack>
            <PackItem>
                <Box padding={3} style={{ width: '400px' }}>
                    <Dropdown
                        options={foodOptionsString}
                        defaultValue={initialSelectionIndex}
                        onChange={handleOnChange}
                        label="Dish type"
                        renderAggregatedTagsLabel={
                            handleRenderAggregatedTagsLabel
                        }
                        multiple
                        enableSelectAllOption
                        enableSearchOption
                        openTagsCount={5}
                    />
                </Box>
            </PackItem>
            <PackItem>
                <Box marginLeft={4}>
                    <Typography label small>
                        Selected options:
                    </Typography>
                    <Typography>{selectedOptions.join(', ')}</Typography>
                    <Typography label small>
                        Selected option indices:
                    </Typography>
                    <Typography>[{selectedItemIndex.join(', ')}]</Typography>
                </Box>
            </PackItem>
        </Pack>
    );
};

// export const MultipleWithSpecifiedNumberOfOpenTagsAndAutomatedAggregatedTagsCountLabel = () => {
//     const initialSelectionIndex: number[] = [];
//
//     const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>(
//         initialSelectionIndex,
//     );
//     const selectedFoodOptions = selectedItemIndex.map(
//         index => foodOptionsString[index],
//     );
//     const [selectedOptions, setSelectedOptions] = useState<
//         DropdownSelectedOptionType[]
//     >(selectedFoodOptions);
//
//     const handleOnChange = (event: any) => {
//         const selectedIndices = event.target.value;
//
//         const nextFoodOptions = selectedIndices.map(
//             (index: number) => foodOptionsString[index],
//         );
//
//         setSelectedItemIndex(selectedIndices);
//         setSelectedOptions(nextFoodOptions);
//     };
//
//     const handleRenderAggregatedTagsLabel = (aggregatedTagsCount: number) =>
//         `+ ${aggregatedTagsCount} more`;
//
//     return (
//         <Pack>
//             <PackItem>
//                 <Box padding={3} style={{ width: '400px' }}>
//                     <Dropdown
//                         options={foodOptionsString}
//                         defaultValue={initialSelectionIndex}
//                         onChange={handleOnChange}
//                         label="Dish type"
//                         renderAggregatedTagsLabel={
//                             handleRenderAggregatedTagsLabel
//                         }
//                         multiple
//                         enableSelectAllOption
//                         enableSearchOption
//                         singleLine
//                     />
//                 </Box>
//             </PackItem>
//             <PackItem>
//                 <Box marginLeft={4}>
//                     <Typography label small>
//                         Selected options:
//                     </Typography>
//                     <Typography>{selectedOptions.join(', ')}</Typography>
//                     <Typography label small>
//                         Selected option indices:
//                     </Typography>
//                     <Typography>[{selectedItemIndex.join(', ')}]</Typography>
//                 </Box>
//             </PackItem>
//         </Pack>
//     );
// };

export const ErrorAndDisabledStatePropagation = () => {
    const initialSelectionIndex = 2;
    const options = ['Köfte', 'Pad Thai', 'Churrasco', 'Baozi'];
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOptionLast, setSelectedOptionLast] = useState(
        options[initialSelectionIndex],
    );
    const [isDisabled, setIsDisabled] = useState(true);
    const handleSelect = (option: any) => setSelectedOption(option);
    const handleOnSelect = (option: any) => setSelectedOptionLast(option);
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
                        onSelect={handleOnSelect}
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

export const DisabledMultiple = () => {
    const initialSelectionIndex = [2, 3];
    const options = ['Köfte', 'Pad Thai', 'Churrasco', 'Baozi'];
    const [isDisabled] = useState(true);

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
                    <Dropdown
                        disabled={true}
                        label={`${
                            isDisabled ? 'Disabled' : 'Enabled'
                        } with pre-selected`}
                        options={options}
                        defaultValue={initialSelectionIndex}
                        multiple
                    />
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
            <Button marginTop={5} onClick={handleReset}>
                Reset
            </Button>
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
                <FormFieldMessage>Place custom message here</FormFieldMessage>
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

export const CustomOptionFormatMultipleExpandedListWithSelectAllAndSearch = () => {
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
            enableSelectAllOption
            enableSearchOption
        />
    );
};

export const CustomSelectAllLabelElement = () => {
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
            enableSelectAllOption
            selectAllLabel="Select/Deselect All"
            enableSearchOption
        />
    );
};

export const CustomOptionFormatMultipleExpandedListWithSelectAllAndAllItemsSelected = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <Dropdown
            multiple
            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
            label="Dish type"
            defaultValue={[0, 1, 2, 3]}
            formatOption={formatOption}
            isListExpanded={true}
            enableSelectAllOption
            enableSearchOption
        />
    );
};

export const CustomSearchPlaceholder = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <Dropdown
            multiple
            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
            label="Dish type"
            defaultValue={[2, 3]}
            formatOption={formatOption}
            isListExpanded={true}
            enableSearchOption
            searchPlaceholder="What's searching?"
        />
    );
};

export const CustomSearchWithPreFilledQuery = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <Dropdown
            multiple
            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
            label="Dish type"
            defaultValue={[2, 3]}
            formatOption={formatOption}
            isListExpanded={true}
            enableSearchOption
            defaultSearchQuery="Tacos"
        />
    );
};

export const ControlledOpenState = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dropdown
                multiple
                options={foodOptions}
                label="Dish type"
                defaultValue={[2, 3]}
                open={open}
                onOpenChange={(way: boolean) => {
                    console.log(`onOpenChange: ${way}`);
                    setOpen(way);
                }}
            />
        </>
    );
};

export const DynamicOptionsList = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        console.log('story handleSelect', { option });
        setSelectedOption(option);
    };

    const [options, setOptions] = useState<string[]>(foodOptionsString);

    const handleOnClick = async () => {
        const results = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
        ).then(response => response.json());

        console.log({ results: results.map((item: any) => item.title) });
        setOptions(results.map((item: any) => item.title));
    };

    return (
        <>
            <Dropdown
                options={options}
                onSelect={handleSelect}
                label="Dish type"
            />
            <br />
            <Button marginY={4} onClick={handleOnClick}>
                Update options
            </Button>
            <br />
            <Typography paragraph>
                Selected value: {JSON.stringify(selectedOption)}
            </Typography>
        </>
    );
};

export const DynamicOptionsListMultiple = () => {
    const [options, setOptions] = useState<any[]>(foodOptionsString);

    const handleChange = (changeEvent: DropdownOnChangeEventType) => {
        console.log('handleChange', changeEvent.target.value);
    };

    const handleOnClick = async () => {
        const results = await fetch(
            `${
                Math.ceil(Math.random() * 100) % 2 === 1
                    ? 'https://jsonplaceholder.typicode.com/posts'
                    : 'https://jsonplaceholder.typicode.com/albums'
            }`,
        ).then(response => response.json());

        setOptions(results.map((item: any) => item.title));
    };

    return (
        <>
            <Dropdown
                multiple
                enableSearchOption
                enableSelectAllOption
                openTagsCount={3}
                onChange={handleChange}
                label="Test label" // //translation('categoryFilter.dropDownLabel')
                options={options}
            />
            <br />
            <Button marginY={4} onClick={handleOnClick}>
                Update options
            </Button>
        </>
    );
};

export const FromDialog = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        console.log('story handleSelect', { option });
        setSelectedOption(option);
    };

    return (
        <Dialog open>
            <DialogContent>
                <Dropdown
                    options={[
                        'Biryani',
                        'Tacos',
                        'Pho',
                        'Pâté of roasted indigenous legumes',
                    ]}
                    value={selectedOption}
                    onChange={handleSelect}
                    label="Dish type"
                />
            </DialogContent>
        </Dialog>
    );
};

export const AtTheBottom = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleSelect = (option: any) => {
        console.log('story handleSelect', { option });
        setSelectedOption(option);
    };

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
            <Dropdown
                options={[
                    'Biryani',
                    'Tacos',
                    'Pho',
                    'Pâté of roasted indigenous legumes',
                ]}
                onSelect={handleSelect}
                label="Dish type"
            />
        </>
    );
};

export const NoPortal = () => {
    return (
        <>
            <Dropdown
                options={[
                    'Biryani',
                    'Tacos',
                    'Pho',
                    'Pâté of roasted indigenous legumes',
                ]}
                label="Dish type"
                enablePortal={false}
            />
        </>
    );
};

export const DefaultOpen = () => {
    return (
        <>
            <Dropdown
                options={[
                    'Biryani',
                    'Tacos',
                    'Pho',
                    'Pâté of roasted indigenous legumes',
                ]}
                label="Dish type"
                enablePortal={false}
                defaultOpen
            />
        </>
    );
};

const factions = [
    {
        id: 'zerg',
        label: 'Zerg This isavery long title grocery goods and medications',
    },
    { id: 'terr', label: 'Terran' },
    { id: 'prot', label: 'Protoss' },
];

const characters = [
    { value: 1, label: 'Jim Raynor', groupId: 'terr' },
    { value: 2, label: 'Duke', groupId: 'terr' },

    { value: 4, label: 'Zeratul', groupId: 'prot' },
    { value: 5, label: 'Tassadar', groupId: 'prot' },
    { value: 6, label: 'Fenix', groupId: 'prot' },

    { value: 7, label: 'Kerrigan', groupId: 'zerg' },
    { value: 8, label: 'Overmind', groupId: 'zerg' },
    { value: 9, label: 'Cerebrate', groupId: 'zerg' },
];

export const WithGroups = () => {
    const handleSelect = (option: any) => {
        console.log('story handleSelect', { option });
    };

    return (
        <Dropdown
            margin={1}
            onSelect={handleSelect}
            options={characters}
            label="Multiple options"
            multiple
            maxWidth="400px"
            enableSelectAllOption
            enableSearchOption
            groups={factions}
        />
    );
};

export const StickySearchField = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <>
            <Dropdown
                multiple
                options={foodOptions}
                label="Dish type"
                defaultValue={[2, 3]}
                formatOption={formatOption}
                isListExpanded={true}
                enableSelectAllOption
                enableSearchOption
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Test Test Test Test Test
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
            Test Test Test Test Test
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
            Test Test Test Test Test
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
            Test Test Test Test Test
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
            Test Test Test Test Test
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};
