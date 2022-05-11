/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
import { DisablePortal } from '@deliveryhero/armor-system';
import { DatePicker } from '../DatePicker';
import { isDayAllowed, pickADay } from '../../__test__/util';
import { DATE_PICKER_INFINITY } from '../../constants';

const selectedDate = new Date(2021, 11, 2, 17, 0, 0, 100);

describe('<DatePicker />', () => {
    describe('Selection', () => {
        afterEach(async () => {
            await cleanup();
            await cleanupHooks();
        });

        it('should fire onChange when a day is clicked', async () => {
            const onChange = jest.fn();

            const { container } = render(
                <DatePicker
                    open
                    dateValue={selectedDate}
                    onDateValueChange={onChange}
                />,
                {
                    wrapper: DisablePortal,
                },
            );

            pickADay(container, 9);

            expect(onChange).toHaveBeenCalled();
        });
    });
});
