/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { DisablePortal } from '@deliveryhero/armor-system';
import { DatePicker } from '../DatePicker';
import { makeDateString, pickAMonth, pickAYear } from '../../__test__/util';

const selectedDate = new Date(2021, 11, 2, 17, 0, 0, 100);

describe('<DatePicker /> api enableMonthYearMode', () => {
    describe('Selection', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should fire onChange when a month and year is clicked', async () => {
            const onChange = jest.fn();

            const { container } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                    enableMonthYearPickerMode={true}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickAYear(container, 2024);
            pickAMonth(container, 11);

            const call = onChange.mock.calls[0];
            expect(makeDateString(call[0])).toEqual('11-1-2024');
        });
    });
});
