/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { DisablePortal } from '@deliveryhero/armor-system';

import { DateRangePicker } from '../..';
import { makeDateString, pickADay } from '../../__test__/util';

describe('<DateRangePicker />', () => {
    describe('Selection', () => {
        afterEach(async () => {
            cleanup();
            await cleanupHooks();
        });

        const currentDate = new Date(2021, 7, 10, 10, 4, 0, 100);

        it('should select via two clicks, forward', () => {
            const onDateValueChange = jest.fn();

            const { container } = render(
                <DateRangePicker
                    open
                    onDateValueChange={onDateValueChange}
                    currentDate={currentDate}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);
            expect(onDateValueChange).not.toHaveBeenCalled();

            pickADay(container, 19);
            expect(onDateValueChange).toHaveBeenCalled();

            const callArg = onDateValueChange.mock.calls[0][0];

            expect(makeDateString(callArg[0])).toEqual('7-9-2021');
            expect(makeDateString(callArg[1])).toEqual('7-19-2021');
        });

        it('should select via two clicks, backward', () => {
            const onDateValueChange = jest.fn();

            const { container } = render(
                <DateRangePicker
                    open
                    onDateValueChange={onDateValueChange}
                    currentDate={currentDate}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 19);
            expect(onDateValueChange).not.toHaveBeenCalled();

            pickADay(container, 9);
            expect(onDateValueChange).toHaveBeenCalled();

            const callArg = onDateValueChange.mock.calls[0][0];

            expect(makeDateString(callArg[0])).toEqual('7-9-2021');
            expect(makeDateString(callArg[1])).toEqual('7-19-2021');
        });
    });
});
