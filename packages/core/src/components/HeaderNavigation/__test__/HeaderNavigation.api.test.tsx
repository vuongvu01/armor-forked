/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HeaderNavigation } from '../HeaderNavigation';
import { HeaderNavigationSelector } from '../HeaderNavigationSelector';

const navigationSelectorParams = {
    label: 'Country',
    isMultiselect: true,
    options: [
        { value: 0, label: 'Japan' },
        { value: 1, label: 'Laos' },
        { value: 2, label: 'Germany', disabled: true },
    ],
};

const setupComponent = () => {
    return render(
        <HeaderNavigation
            selector={
                <HeaderNavigationSelector
                    navigationSelectorParams={navigationSelectorParams}
                    enableSelectAllOption
                />
            }
        />,
    );
};

describe('<HeaderNavigation />', () => {
    describe('enableSelectAllOption', () => {
        it('renders all checkboxes as unchecked initially when clicking on label', async () => {
            setupComponent();

            // Trigger click on label which
            // shows the selector
            await waitFor(() => {
                const label = screen.getByText(navigationSelectorParams.label);

                userEvent.click(label);
            });

            // Check for unchecked options
            await waitFor(() => {
                const options = screen.getAllByRole('checkbox');

                expect(options).toHaveLength(
                    navigationSelectorParams.options.length + 1,
                );

                options.forEach((option) => {
                    expect(option).not.toBeChecked();
                });
            });
        });

        it('toggles options when clicking on "Select all" option', async () => {
            setupComponent();

            // Trigger click on label which
            // shows the selector
            await waitFor(() => {
                const label = screen.getByText(navigationSelectorParams.label);

                userEvent.click(label);
            });

            // Trigger click on select all option
            await waitFor(() => {
                const options = screen.getAllByRole('checkbox');
                const [selectAllOption] = options;

                userEvent.click(selectAllOption);
            });

            // Check that all options are checked
            await waitFor(() => {
                const options = screen.getAllByRole('checkbox');
                const [selectAllOption] = options;

                options.forEach((option) => {
                    if (option.hasAttribute('disabled')) {
                        return;
                    }

                    expect(option).toBeChecked();
                });

                userEvent.click(selectAllOption);
            });

            // Check that all options are unchecked again
            await waitFor(() => {
                const options = screen.getAllByRole('checkbox');

                options.forEach((option) => {
                    if (option.hasAttribute('disabled')) {
                        return;
                    }

                    expect(option).not.toBeChecked();
                });
            });
        });
    });
});
