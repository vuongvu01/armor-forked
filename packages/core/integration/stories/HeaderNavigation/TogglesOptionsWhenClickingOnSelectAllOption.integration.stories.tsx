import React from 'react';

import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import {
    HeaderNavigationSelector,
    HeaderNavigation,
} from '../../../src/components/HeaderNavigation';

// Component mock implementation
export const TogglesOptionsWhenClickingOnSelectAllOption = () => {
    const selectorParams = {
        label: 'Country',
        isMultiselect: false,
        options: [
            { value: 0, label: 'Japan' },
            { value: 1, label: 'Laos' },
            { value: 2, label: 'Sweden' },
            { value: 3, label: 'Vietnam' },
            { value: 4, label: 'United States of America', disabled: true },
        ],
    };

    return (
        <HeaderNavigation
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={{
                        ...selectorParams,
                        isMultiselect: true,
                    }}
                    enableSelectAllOption
                />
            }
        />
    );
};

// Interactive tests with Play function
TogglesOptionsWhenClickingOnSelectAllOption.play = async ({
    canvasElement,
}) => {
    const canvas = within(canvasElement);
    const headerSelector = await canvas.findByText('Country');

    userEvent.click(headerSelector);

    const selectAllOption = await screen.findByText('Select all');

    // Check that all options are checked
    await waitFor(() => {
        userEvent.click(selectAllOption);
    });

    const options = screen.getAllByRole('checkbox');

    options.forEach((option) => {
        if (option.hasAttribute('disabled')) {
            return;
        }

        expect(option).toBeChecked();
    });

    // Check that all options are unchecked again
    await waitFor(() => {
        userEvent.click(selectAllOption);
    });

    options.forEach((option) => {
        if (option.hasAttribute('disabled')) {
            return;
        }

        expect(option).not.toBeChecked();
    });
};

export default {
    title: 'Integration/HeaderNavigation/TogglesOptionsWhenClickingOnSelectAllOptionOption',
    component: TogglesOptionsWhenClickingOnSelectAllOption,
};
