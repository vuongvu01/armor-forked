/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { Table } from '../..';

describe('<Table />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Table />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<Table />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Table', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Table ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support component overridee', () => {
        // @ts-ignore
        expect(<Table>With custom theme</Table>).toSupportOverride('Table');
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Table).toSupportMarginProps();
    });
});
