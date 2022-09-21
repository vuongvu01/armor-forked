/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { DatePicker } from '../DatePicker';
import {
    isDayAllowed,
    isDayFree,
    makeDateString,
    pickADay,
} from '../../__test__/util';
import { DATE_PICKER_INFINITY } from '../../constants';

const localDate = new Date(2021, 7, 10, 10, 4, 0, 100);

describe('<DatePicker />', () => {
    describe('Allowed dates', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should support allowedDateRanges', async () => {
            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    allowedDateRanges={[[localDate, DATE_PICKER_INFINITY]]}
                />,
            );

            expect(isDayAllowed(container, 7)).toBeFalsy();
            expect(isDayAllowed(container, 8)).toBeFalsy();
            expect(isDayAllowed(container, 9)).toBeFalsy();
            expect(isDayAllowed(container, 10)).toBeTruthy();
            expect(isDayAllowed(container, 11)).toBeTruthy();
            expect(isDayAllowed(container, 12)).toBeTruthy();
        });

        it('should support isDateAllowed', async () => {
            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    currentDate={localDate}
                    isDateAllowed={(date) => {
                        return makeDateString(date) !== '7-12-2021';
                    }}
                />,
            );

            expect(isDayAllowed(container, 11)).toBeTruthy();
            expect(isDayAllowed(container, 12)).not.toBeTruthy();
            expect(isDayAllowed(container, 13)).toBeTruthy();
        });

        it('should not allow selection of not allowed dates', async () => {
            const onChange = jest.fn();

            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    onDateValueChange={onChange}
                    currentDate={localDate}
                    isDateAllowed={(date) => {
                        return makeDateString(date) !== '7-12-2021';
                    }}
                />,
            );

            pickADay(container, 12);
            expect(onChange).not.toHaveBeenCalled();

            pickADay(container, 11);
            expect(onChange).toHaveBeenCalled();
        });

        it('should support the "current" notation in allowedDateRanges', async () => {
            const { container, rerender } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    currentDate={localDate}
                    allowedDateRanges={[['current+1', DATE_PICKER_INFINITY]]}
                />,
            );

            expect(isDayAllowed(container, 7)).toBeFalsy();
            expect(isDayAllowed(container, 8)).toBeFalsy();
            expect(isDayAllowed(container, 9)).toBeFalsy();
            expect(isDayAllowed(container, 10)).toBeFalsy();
            expect(isDayAllowed(container, 11)).toBeTruthy();
            expect(isDayAllowed(container, 12)).toBeTruthy();

            rerender(
                <DatePicker
                    open
                    dateValue={localDate}
                    currentDate={localDate}
                    allowedDateRanges={[['current-1', DATE_PICKER_INFINITY]]}
                />,
            );

            expect(isDayAllowed(container, 7)).toBeFalsy();
            expect(isDayAllowed(container, 8)).toBeFalsy();
            expect(isDayAllowed(container, 9)).toBeTruthy();
            expect(isDayAllowed(container, 10)).toBeTruthy();
            expect(isDayAllowed(container, 11)).toBeTruthy();
            expect(isDayAllowed(container, 12)).toBeTruthy();
        });

        it('should support freeDateRanges', async () => {
            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    freeDateRanges={[[localDate, DATE_PICKER_INFINITY]]}
                />,
            );

            expect(isDayFree(container, 7)).toBeFalsy();
            expect(isDayFree(container, 8)).toBeFalsy();
            expect(isDayFree(container, 9)).toBeFalsy();
            expect(isDayFree(container, 10)).toBeTruthy();
            expect(isDayFree(container, 11)).toBeTruthy();
            expect(isDayFree(container, 12)).toBeTruthy();
        });

        it('should support isDateFree', async () => {
            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    currentDate={localDate}
                    isDateFree={(date) => {
                        return makeDateString(date) !== '7-12-2021';
                    }}
                />,
            );

            expect(isDayFree(container, 11)).toBeTruthy();
            expect(isDayFree(container, 12)).not.toBeTruthy();
            expect(isDayFree(container, 13)).toBeTruthy();
        });

        it('should not allow selection of non-free dates', async () => {
            const onChange = jest.fn();

            const { container } = render(
                <DatePicker
                    open
                    dateValue={localDate}
                    onDateValueChange={onChange}
                    currentDate={localDate}
                    isDateFree={(date) => {
                        return makeDateString(date) !== '7-12-2021';
                    }}
                />,
            );

            pickADay(container, 12);
            expect(onChange).not.toHaveBeenCalled();

            pickADay(container, 11);
            expect(onChange).toHaveBeenCalled();
        });
    });
});
