/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, fireEvent, render, act } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { DisablePortal } from '@deliveryhero/armor-system';
import { DatePicker } from '../DatePicker';
import {
    mashClearAllButton,
    mashTodayButton,
    pickADay,
} from '../../__test__/util';

const selectedDate = new Date(2021, 11, 2, 17, 0, 0, 100);

describe('<DatePicker />', () => {
    describe('Apply button', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should appear when enableActionButtons opted in (backward compatibility)', async () => {
            const { getByText } = render(
                <DatePicker enableActionButtons open />,
                {
                    wrapper: DisablePortal,
                },
            );

            const button = getByText('Apply');
            expect(button).toBeInTheDocument();
        });

        it('should appear when enableApplyButton opted in', async () => {
            const { getByText } = render(
                <DatePicker enableApplyButton open />,
                {
                    wrapper: DisablePortal,
                },
            );

            const button = getByText('Apply');
            expect(button).toBeInTheDocument();
        });

        it('should fire onChange when apply is clicked', async () => {
            const onChange = jest.fn();

            const { container, getByText } = render(
                <DatePicker
                    enableApplyButton
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);

            expect(onChange).not.toHaveBeenCalled();

            const button = getByText('Apply');

            act(() => {
                fireEvent.click(button!);
            });

            expect(onChange).toHaveBeenCalled();
        });

        it('should fire onChange when apply is clicked', async () => {
            const onChange = jest.fn();

            const { container, getByText } = render(
                <DatePicker
                    enableApplyButton
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);

            const button = getByText('Apply');

            act(() => {
                fireEvent.click(button!);
            });

            expect(onChange).toHaveBeenCalled();
        });

        it('should not fire onChange when a day is clicked', async () => {
            const onChange = jest.fn();

            const { container } = render(
                <DatePicker
                    enableApplyButton
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);

            expect(onChange).not.toHaveBeenCalled();
        });

        it('should not fire onChange when the today button is clicked', async () => {
            const onChange = jest.fn();

            const { getByText } = render(
                <DatePicker
                    enableApplyButton
                    enableTodayButton
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashTodayButton(getByText);

            expect(onChange).not.toHaveBeenCalled();
        });

        it('should fire onChange when the clear all button is clicked', async () => {
            const onChange = jest.fn();

            const { getByText } = render(
                <DatePicker
                    enableApplyButton
                    enableClearSelectionButton
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashClearAllButton(getByText);

            expect(onChange).toHaveBeenCalled();
        });
    });
});
