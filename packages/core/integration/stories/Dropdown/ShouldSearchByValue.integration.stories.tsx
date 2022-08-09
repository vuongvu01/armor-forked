import React from 'react';

import { userEvent, waitFor, within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Dropdown } from '../../../src/components/Dropdown';
import { sleep } from '../util';

const foodOptions = [
    { value: -100, label: 'All food' },
    { value: 0, label: 'Biryani' },
    { value: 1, label: 'Tacos' },
    { value: 2, label: 'Pho', disabled: true },
    { value: 3, label: 'Pâté of roasted indigenous legumes' },
    { value: 4, label: 'Pizza', disabled: true },
    { value: 5, label: 'Enchiladas', disabled: true },
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

export const ShouldSearchByValue = () => {
    return (
        <Dropdown options={foodOptions} label="Dish type" enableSearchOption />
    );
};

ShouldSearchByValue.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdownInput = await canvas.getByRole('textbox');

    await waitFor(() => {
        userEvent.click(dropdownInput);
    });

    const [, searchInput] = await screen.getAllByRole('textbox');

    await waitFor(async () => {
        userEvent.type(searchInput, '11');
    });

    await sleep(1000);
    const results = await screen.getAllByTestId('OptionListItem');

    expect(results.length).toBe(1);
    expect(screen.getByText('Baozi')).toBeVisible();
};

export default {
    title: 'Integration/Dropdown/ShouldSearchByValue',
    component: ShouldSearchByValue,
};
