import React from 'react';

import { Dropdown, Typography } from '../../../src/components';
import { ScalarType } from '../../../src/type';
import { OptionItemType } from '../../../src/components/Dropdown/type';

export default {
    title: 'Dropdown',
    component: Dropdown,
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

export const MinimumConfiguration = () => (
    <Dropdown
        options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
        label="Dish type"
    />
);

export const Inline = () => {
    return (
        <>
            <Dropdown
                options={foodOptions}
                label="Dish type A"
                marginRight={2}
            />
            <Dropdown options={foodOptions} label="Dish type B" />
        </>
    );
};

export const PreSelectedValue = () => (
    <Dropdown options={foodOptionsString} defaultValue={3} label="Dish type" />
);

export const PreSelectedMultipleValues = () => (
    <Dropdown
        options={foodOptionsString}
        defaultValue={[3, 6]}
        label="Dish type"
        multiple
    />
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
