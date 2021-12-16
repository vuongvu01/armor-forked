/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, fireEvent, render, act } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
import { DisablePortal } from '@deliveryhero/armor-system';
import { DatePicker } from '../DatePicker';
import {
    makeDateString,
    mashClearAllButton,
    mashTodayButton,
    pickADay,
} from '../../__test__/util';

const currentDate = new Date(2021, 11, 10, 17, 0, 0, 100);
const selectedDate = new Date(2021, 11, 2, 17, 0, 0, 100);

describe('<DatePicker />', () => {
    describe('Close panel', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should close the panel when the today button is clicked', async () => {
            const onClose = jest.fn();

            const { getByText } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onOpenChange={onClose}
                    enableTodayButton
                    enableCloseOnSelect
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashTodayButton(getByText);

            expect(onClose).toHaveBeenCalled();
        });

        it('should not close the panel when a day is clicked, but apply enabled', async () => {
            const onClose = jest.fn();

            const { container } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onOpenChange={onClose}
                    enableCloseOnSelect
                    enableApplyButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);

            expect(onClose).not.toHaveBeenCalled();
        });

        it('should not close the panel when the today button is clicked, but apply enabled', async () => {
            const onClose = jest.fn();

            const { getByText } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onOpenChange={onClose}
                    enableTodayButton
                    enableCloseOnSelect
                    enableApplyButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashTodayButton(getByText);

            expect(onClose).not.toHaveBeenCalled();
        });

        it('should close the panel when the clear all button is clicked', async () => {
            const onClose = jest.fn();

            const { getByText } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onOpenChange={onClose}
                    enableTodayButton
                    enableCloseOnSelect
                    enableClearSelectionButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashClearAllButton(getByText);

            expect(onClose).toHaveBeenCalled();
        });

        it('should close the panel when the clear all button is clicked, even if the apply button enabled', async () => {
            const onClose = jest.fn();

            const { getByText } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onOpenChange={onClose}
                    enableTodayButton
                    enableCloseOnSelect
                    enableApplyButton
                    enableClearSelectionButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            mashClearAllButton(getByText);

            expect(onClose).toHaveBeenCalled();
        });
    });
});
