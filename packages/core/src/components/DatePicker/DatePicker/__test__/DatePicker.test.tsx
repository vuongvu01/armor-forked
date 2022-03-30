/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, fireEvent, prettyDOM, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import { DATE_PICKER_INFINITY, DatePicker } from '../../index';
import { COMMON_CLASSES } from '../../__test__/common';
import { DateVector } from '../../utils/DateVector';
import { makeDateString } from '../../__test__/util';

describe('<DatePicker />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DatePicker />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <DatePicker
                open
                enableActionButtons
                enableTimePicker
                enablePortal={false}
            />,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DatePicker', {
            Root: [],
        });
        // @ts-ignore
        expect(result.container).toHaveChildrenWithClassNames([
            'DatePicker-Root',
            'DatePicker-Input',
            'DatePicker-Dropdown',

            ...COMMON_CLASSES,
        ]);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<DatePicker ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportRestPropsForwarding('DatePicker');
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<DatePicker>With custom theme</DatePicker>).toSupportOverride(
            'DatePicker',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportWidthProps();
    });

    it('should support onDayMouseEnter()', async () => {
        const onDayMouseEnter = jest.fn();

        const localDate = new Date(2021, 7, 10, 10, 4, 0, 100);
        const { container } = render(
            <DatePicker
                open
                dateValue={localDate}
                onDayMouseEnter={onDayMouseEnter}
            />,
        );

        const day = container.querySelector('[data-day="12"]');
        expect(day).toBeInTheDocument();

        act(() => {
            fireEvent.mouseEnter(day!);
        });

        expect(onDayMouseEnter).toBeCalled();
        const call = onDayMouseEnter.mock.calls[0];

        expect(makeDateString(call[0])).toEqual('7-12-2021');
    });

    it('should support onDayMouseLeave()', async () => {
        const onDayMouseLeave = jest.fn();

        const localDate = new Date(2021, 7, 10, 10, 4, 0, 100);
        const { container } = render(
            <DatePicker
                open
                dateValue={localDate}
                onDayMouseLeave={onDayMouseLeave}
            />,
        );

        const day = container.querySelector('[data-day="12"]');
        expect(day).toBeInTheDocument();

        act(() => {
            fireEvent.mouseLeave(day!);
        });

        expect(onDayMouseLeave).toBeCalled();
        const call = onDayMouseLeave.mock.calls[0];

        expect(makeDateString(call[0])).toEqual('7-12-2021');
    });

    it('should preserve time when picking dates', async () => {
        const localDate = new Date(2021, 7, 10, 10, 20, 20, 100);
        const onDateValueChange = jest.fn();

        const { container } = render(
            <DatePicker
                open
                dateValue={localDate}
                onDateValueChange={onDateValueChange}
                enableTimePicker
            />,
        );

        const button = container.querySelector(
            '.DatePickerDaySelector-Day[data-day="9"] .DatePickerDaySelector-DayButton',
        );

        act(() => {
            fireEvent.click(button!);
        });

        expect(onDateValueChange).toHaveBeenCalled();
        const arg = onDateValueChange.mock.calls[0][0];

        const vect = DateVector.createFromLocalDate(arg);

        expect(vect.hour).toEqual(10);
        expect(vect.minute).toEqual(20);
    });

    // it('should support controlled/uncontrolled value', async () => {
    //     // todo
    // });
    //
    // it('should support controlled/uncontrolled open', async () => {
    //     // todo
    // });
    //
    // it('should have cancel/ok buttons', async () => {
    //     // todo
    // });
    //
    // it('should support date picking', async () => {
    //     // todo
    // });
    //
    // it('should support time picking', async () => {
    //     // todo
    // });
    //
    // it('should support portal', async () => {
    //     // todo
    // });
    //
    // it('should support custom z-index', async () => {
    //     // todo
    // });
    //
    // it('should support close on outer click', async () => {
    //     // todo
    // });
    //
    // it('should support custom label', async () => {
    //     // todo
    // });
    //
    // it('should not open dropdown when disabled', async () => {
    //     // todo
    // });
    //
    // it('should not open dropdown when readonly', async () => {
    //     // todo
    // });
});
