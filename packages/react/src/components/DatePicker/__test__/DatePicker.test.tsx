/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { customTheme } from './helpers';
import { DatePicker } from '..';

describe('<DatePicker />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<DatePicker />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<DatePicker />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('DatePicker', {
            Root: [],
        });
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
        let tree = renderer
            .create(<DatePicker>With custom theme</DatePicker>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <DatePicker>With custom theme</DatePicker>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(DatePicker).toSupportMarginAttributes();
    });
});
