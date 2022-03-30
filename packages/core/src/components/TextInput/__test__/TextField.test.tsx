/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { TextInput } from '../..';

describe('<TextInput />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<TextInput />);
    });

    it('should support forwardRef to input', () => {
        const { result } = renderHook(() => useRef<HTMLInputElement>(null));
        render(<TextInput ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLInputElement);
    });

    it('should support forwardRef to root', () => {
        const { result } = renderHook(() => useRef(null));
        render(<TextInput ref={result.current} enableRootRef />);

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(TextInput).toSupportMarginProps();
    });

    it('should support width properties', async () => {
        // @ts-ignore
        expect(TextInput).toSupportWidthProps();
    });
});
