/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DatePicker } from '../DatePicker';

const localDate = new Date(2022, 0, 1);

describe('<DatePicker />', () => {
    describe('isMonthAllowed', () => {
        it('should not be able to select disabled months', async () => {
            render(
                <DatePicker
                    open
                    dateValue={localDate}
                    isMonthAllowed={(year) => {
                        if (year >= 2022) {
                            return true;
                        }

                        return false;
                    }}
                    yearRange={[2021, 2022]}
                />,
            );

            // Toggle month view
            await waitFor(() => {
                const currentMonth = screen.getByText('January 2022');

                userEvent.click(currentMonth);
            });

            // Toggle "2021" section by clicking on it
            await waitFor(() => {
                const year2021 = screen.getByText('2021');

                userEvent.click(year2021);
            });

            // Validate that you can't select any month from "2021"
            await waitFor(() => {
                expect(screen.queryByText('Jan')).toBeDisabled();
                expect(screen.queryByText('Dec')).toBeDisabled();
            });
        });

        it('should be able to select enabled months', async () => {
            render(
                <DatePicker
                    open
                    dateValue={localDate}
                    isMonthAllowed={(year) => {
                        if (year >= 2022) {
                            return true;
                        }

                        return false;
                    }}
                    yearRange={[2021, 2022]}
                />,
            );

            // Toggle month view
            await waitFor(() => {
                const currentMonth = screen.getByText('January 2022');

                userEvent.click(currentMonth);
            });

            // Select allowed month
            await waitFor(() => {
                const buttonJanuary = screen.getByText('Jan');

                expect(buttonJanuary).toBeEnabled();

                userEvent.click(buttonJanuary);
            });
        });

        it('should be able to select only a few enabled months', async () => {
            const allowedMonths = [2]; // March
            const disabledMonths = [
                'Jan',
                'Feb',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];

            render(
                <DatePicker
                    open
                    dateValue={localDate}
                    isMonthAllowed={(_year, month) => {
                        if (allowedMonths.includes(month)) {
                            return true;
                        }

                        return false;
                    }}
                    yearRange={[2021, 2022]}
                />,
            );

            // Toggle month view
            await waitFor(() => {
                const currentMonth = screen.getByText('January 2022');

                userEvent.click(currentMonth);
            });

            // Select only March (allowed) and check other months are disabled
            await waitFor(() => {
                disabledMonths.forEach((monthName) => {
                    expect(screen.queryByText(monthName)).toBeDisabled();
                });

                const buttonMarch = screen.getByText('Mar');

                expect(buttonMarch).toBeEnabled();

                userEvent.click(buttonMarch);
            });
        });
    });
});
