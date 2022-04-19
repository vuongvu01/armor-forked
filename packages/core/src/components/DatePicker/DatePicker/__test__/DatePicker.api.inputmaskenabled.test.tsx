/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import userEvent from '@testing-library/user-event';
import { DatePicker } from '../../index';
import { makeDateString, makeDateTimeString } from '../../__test__/util';

describe('<DatePicker inputMaskEnabled />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DatePicker inputMaskEnabled />);
    });

    it('should pass correct date upon input to callback', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DatePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '26111994');
        });

        expect(onDateValueChangeHandler).toHaveBeenCalled();
        expect(
            makeDateString(onDateValueChangeHandler.mock.calls[0][0]),
        ).toEqual('10-26-1994');
    });

    it('should pass correct date and time upon input to callback', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DatePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
                enableTimePicker
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '261119940914pm');
        });

        expect(onDateValueChangeHandler).toHaveBeenCalled();
        expect(
            makeDateTimeString(onDateValueChangeHandler.mock.calls[1][0]),
        ).toEqual('10-26-1994 21:14');
    });

    it('should not call the callback prop when incorrect date is typed', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DatePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
                enableTimePicker
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '2611199');
        });

        expect(onDateValueChangeHandler).not.toHaveBeenCalled();
    });

    it('should not call the callback prop when incorrect time is typed', () => {
        const onDateValueChangeHandler = jest.fn();
        const dataTestidInput = 'input42';
        const { getByTestId } = render(
            <DatePicker
                inputMaskEnabled
                onDateValueChange={onDateValueChangeHandler}
                data-testid-input={dataTestidInput}
                enableTimePicker
            />,
        );
        const inputEl = getByTestId(dataTestidInput);

        act(() => {
            userEvent.type(inputEl, '26111994091');
        });

        expect(onDateValueChangeHandler).not.toHaveBeenCalled();
    });
});
