import React from 'react';

import { Button, Dropdown, Search, TextInput } from '../../../src/components';
import { OptionItemType } from '../../../src/components/Dropdown/type';

export default {
    title: 'InlineComponents',
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

export const Collection = () => {
    const formatOption = (option: OptionItemType) => {
        if (typeof option === 'object' && 'label' in option) {
            return `${option.label} meal plan`;
        }

        return `${option} meal plan`;
    };

    return (
        <>
            <Button margin={1}>Test</Button>
            <TextInput label="Label" name="your_price" margin={1} />
            <Search margin={1} />
            <Dropdown
                margin={1}
                options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                label="Single option"
                inline
            />
            <Dropdown
                margin={1}
                multiple
                inline
                options={foodOptions}
                label="Multiple options"
                formatOption={formatOption}
                enableSelectAllOption
                selectAllLabel="Select/Deselect All"
                enableSearchOption
                maxWidth="sm"
            />

            <br />
            <Button margin={1}>Test</Button>
            <TextInput label="Label" name="your_price" margin={1} />
            <Search margin={1} />
            <Dropdown
                margin={1}
                options={['Biryani', 'Tacos', 'Pho', 'Risotto']}
                defaultValue={1}
                label="Single option pre-selected"
                inline
            />
            <Dropdown
                margin={1}
                multiple
                inline
                options={foodOptions}
                label="Multiple options pre-selected"
                defaultValue={[2, 3]}
                formatOption={formatOption}
                enableSelectAllOption
                selectAllLabel="Select/Deselect All"
                openTagsCount={3}
                enableSearchOption
            />
        </>
    );
};
