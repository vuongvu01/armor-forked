/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { DisablePortal } from '@deliveryhero/armor-system';

import { DateRangePicker } from '../..';
import { pickADay } from '../../__test__/util';

describe('<DateRangePicker />', () => {
    describe('Close panel', () => {
        afterEach(async () => {
            cleanup();
            await cleanupHooks();
        });

        const currentDate = new Date(2021, 7, 10, 10, 4, 0, 100);

        it('should close the panel when a day is clicked', () => {
            const onClose = jest.fn();

            const { container } = render(
                <DateRangePicker
                    open
                    onOpenChange={onClose}
                    currentDate={currentDate}
                    enableCloseOnSelect
                    enableClearSelectionButton
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);
            pickADay(container, 19);
            expect(onClose).toHaveBeenCalled();
        });
    });
});
