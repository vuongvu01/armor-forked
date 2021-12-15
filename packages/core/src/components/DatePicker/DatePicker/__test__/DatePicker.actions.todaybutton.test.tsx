/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, fireEvent, render, act } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
import { DisablePortal } from '@deliveryhero/armor-system';
import { DatePicker } from '../DatePicker';
import { makeDateString, mashTodayButton, pickADay } from '../../__test__/util';

const currentDate = new Date(2021, 11, 10, 17, 0, 0, 100);
const selectedDate = new Date(2021, 11, 2, 17, 0, 0, 100);

describe('<DatePicker />', () => {
    describe('Today button', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should display the today button when enableTodayButton is opt in', async () => {
            const { rerender, getByText } = render(
                <DatePicker open enableTodayButton />,
                {
                    wrapper: DisablePortal,
                },
            );

            let todayButton = getByText('Today');
            expect(todayButton).toBeInTheDocument();

            rerender(<DatePicker open enableTodayButton enableApplyButton />);

            todayButton = getByText('Today');
            expect(todayButton).toBeInTheDocument();
        });

        it('should not display the today button when enableTodayButton is opt out', async () => {
            const { queryByText } = render(<DatePicker open />, {
                wrapper: DisablePortal,
            });

            const todayButton = queryByText('Today');
            expect(todayButton).not.toBeInTheDocument();
        });

        it('should fire onChange when the today button is clicked', async () => {
            const onChange = jest.fn();

            const { getByText } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                    currentDate={currentDate}
                    enableTodayButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashTodayButton(getByText);

            expect(onChange).toHaveBeenCalled();
            expect(makeDateString(onChange.mock.calls[0][0])).toEqual(
                '11-10-2021',
            );
        });
    });
});
