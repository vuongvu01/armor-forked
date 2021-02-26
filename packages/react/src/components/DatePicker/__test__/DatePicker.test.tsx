/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { DatePicker } from '..';
import { COMMON_CLASSES } from './common';

describe('<DatePicker />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DatePicker />);
    });

    it('should contain correct CSS classes and attributes', () => {
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
        const { result } = renderHook(() => useRef());
        render(<DatePicker ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportRestPropsForwarding('DatePicker');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<DatePicker>With custom theme</DatePicker>).toSupportCustomTheme(
            'DatePicker',
        );
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportMarginAttributes();
    });

    it('should support width attributes', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportWidthAttributes();
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
