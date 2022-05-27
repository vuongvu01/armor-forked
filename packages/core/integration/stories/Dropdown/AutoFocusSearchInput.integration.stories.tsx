import React from 'react';

import { userEvent, waitFor, within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { isInViewport } from '../util';
import { Dropdown } from '../../../src/components/Dropdown';

export const DropdownVeryFarFromTheTopWithSearchOption = () => {
    const options = ['Bread', 'Spaghetti'];

    return (
        <div style={{ paddingTop: 1500 }}>
            <Dropdown options={options} enableSearchOption />
        </div>
    );
};

DropdownVeryFarFromTheTopWithSearchOption.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdownInput = await canvas.getByRole('textbox');

    // toggle options by clicking
    // on dropdown input
    await waitFor(() => {
        userEvent.click(dropdownInput);
    });

    // check that search input has
    // focus and is in viewport
    await waitFor(async () => {
        const [, searchInput] = screen.getAllByRole('textbox');

        expect(searchInput).toHaveFocus();
        expect(searchInput).toBeVisible();

        expect(isInViewport(searchInput)).toBe(true);
    });
};

export default {
    title: 'Integration/Dropdown/DropdownVeryFarFromTheTopWithSearchOption',
    component: DropdownVeryFarFromTheTopWithSearchOption,
};
