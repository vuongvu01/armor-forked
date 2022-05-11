/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import userEvent from '@testing-library/user-event';
import { DateRangePicker } from '../../index';
import { makeDateString } from '../../__test__/util';

describe('<DateRangePicker inputMaskEnabled />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DateRangePicker inputMaskEnabled />);
    });

    it('should pass correct date upon input to callback', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DateRangePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '2611199430111994');
        });

        expect(onDateValueChangeHandler).toHaveBeenCalled();
        expect(
            makeDateString(onDateValueChangeHandler.mock.calls[0][0][0]),
        ).toEqual('10-26-1994');
        expect(
            makeDateString(onDateValueChangeHandler.mock.calls[0][0][1]),
        ).toEqual('10-30-1994');
    });

    it('should not call the callback when incorrect date is entered', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DateRangePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '261119943011199');
        });

        expect(onDateValueChangeHandler).not.toHaveBeenCalled();
    });
});
