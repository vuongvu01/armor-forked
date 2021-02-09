import React, { useState } from 'react';

import {
    Box,
    Dropdown,
    Pack,
    PackItem,
    Typography,
} from '../../../src/components';
import {
    DropdownSelectedOptionType,
    OptionItemType,
} from '../../../src/components/Dropdown/type';
import { GroupHelper } from '../../../src/helpers/GroupHelper';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

const foodOptions = [
    { value: -100, label: 'All food' },
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    { value: 2, label: 'Pho' },
    { value: 3, label: 'Pâté of roasted indigenous legumes' },
    { value: 42, label: 'Pizza' },
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

const foodOptionsString = [
    'This is a very long city name',
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

export const MinimumConfiguration = () => (
    <Dropdown
        options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
        label="Dish type"
    />
);

export const MinimumConfigurationConstrainedByParent = () => (
    <Box padding={3} style={{ flexDirection: 'column', width: '300px' }}>
        <Dropdown
            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
            label="Dish type"
        />
    </Box>
);

export const SingleSelectWithSearchPrefilled = () => (
    <Box padding={3} style={{ flexDirection: 'column', width: '300px' }}>
        <Dropdown
            options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
            label="Dish type"
            enableSearchOption
            defaultSearchQuery="a"
            isListExpanded
        />
    </Box>
);

export const InlineWithMarginAndWidthSet = () => {
    return (
        <>
            <Dropdown
                margin={1}
                options={foodOptions}
                label="Single option"
                inline
            />

            <Dropdown
                margin={1}
                options={foodOptions}
                label="Multiple options"
                inline
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

export const PreSelectedValue = () => (
    <Dropdown options={foodOptionsString} defaultValue={3} label="Dish type" />
);

export const PreSelectedMultipleValues = () => (
    <Dropdown
        options={foodOptions}
        defaultValue={[3, 42]}
        label="Dish type"
        multiple
    />
);

export const PreSelectedMultipleValuesConstrainedByParent = () => (
    <Box padding={3} style={{ flexDirection: 'column', width: '300px' }}>
        <Dropdown
            options={foodOptionsString}
            defaultValue={[3, 6]}
            label="Dish type"
            multiple
        />
    </Box>
);

export const ErrorState = () => (
    <Dropdown error={true} label="Select one" options={foodOptionsString} />
);

export const DisabledState = () => (
    <Dropdown disabled label="Select one" options={foodOptionsString} />
);

export const DisabledStatePreSelectedValue = () => (
    <Dropdown
        disabled={true}
        label="Disabled with pre-selected"
        options={foodOptionsString}
        defaultValue={2}
    />
);

export const DisabledStateWithMultiplePreSelected = () => {
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
                <Dropdown
                    disabled={true}
                    label={`${
                        isDisabled ? 'Disabled' : 'Enabled'
                    } with pre-selected`}
                    options={options}
                    defaultValue={initialSelectionIndex}
                    multiple
                />
            </GroupHelper>
        </>
    );
};

export const DisabledStateWithMultiplePreSelectedConstrainedByParent = () => {
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

export const CustomDisplay = () => (
    <Dropdown
        options={foodOptionsString}
        label="Dish type"
        multiple
        onRenderSelectedValue={(
            value: ReadonlyArray<unknown>,
            options: ReadonlyArray<unknown>,
        ) => {
            return `${value.length} of ${options.length}`;
        }}
    />
);

export const CustomOptionFormat = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <Dropdown
            options={foodOptions}
            label="Dish type"
            defaultValue={3}
            formatOption={formatOption}
        />
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
        <Box padding={3} style={{ flexDirection: 'column', width: '400px' }}>
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
        </Box>
    );
};

export const CustomSelectAllLabel = () => {
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

export const CustomOptionFormatMultipleExpandedListWithTruncatedTagsOfCustomLenght = () => {
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
            tagLabelMaxLength={3}
            enableSelectAllOption
            enableSearchOption
        />
    );
};

export const MultiplePresetSearchQueryHidesSelectAllOption = () => {
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
            defaultSearchQuery="Tacos"
        />
    );
};

export const MultipleWithSpecifiedNumberOfOpenTagsAndCustomAggregatedTagsCountLabel = () => {
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
                        openTagsCount={3}
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

export const MultipleWithSpecifiedNumberOfOpenTagsPluralCase = () => {
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
                        openTagsCount={2}
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
