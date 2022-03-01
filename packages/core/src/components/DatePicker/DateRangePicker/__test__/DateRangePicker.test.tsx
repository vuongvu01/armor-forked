/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { DateRangePicker } from '../..';
import { COMMON_CLASSES } from '../../__test__/common';

describe('<DateRangePicker />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DateRangePicker />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(
            <DateRangePicker
                open
                enableActionButtons
                enableTimePicker
                enablePortal={false}
            />,
        );
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DateRangePicker', {
            Root: [],
        });
        // @ts-ignore
        expect(result.container).toHaveChildrenWithClassNames([
            'DateRangePicker-Root',
            'DateRangePicker-Input',
            'DateRangePicker-Dropdown',

            ...COMMON_CLASSES,
        ]);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<DateRangePicker ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DateRangePicker).toSupportRestPropsForwarding('DateRangePicker');
    });

    it('should support component override', () => {
        expect(
            <DateRangePicker>With custom theme</DateRangePicker>,
            // @ts-ignore
        ).toSupportOverride('DateRangePicker');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(DateRangePicker).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(DateRangePicker).toSupportWidthAttributes();
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
