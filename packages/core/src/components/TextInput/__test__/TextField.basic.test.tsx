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

    it('should support forwardRef', () => {
        // @ts-ignore
        expect(TextInput).toSupportRefForwarding();
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

    it('should support height properties', async () => {
        // @ts-ignore
        expect(TextInput).toSupportHeightProps();
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(TextInput).toSupportRestPropsForwarding('TextInput');
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(TextInput).toSupportAttributeForwarding();
    });

    it('should support component override', () => {
        // @ts-ignore
        expect(<TextInput />).toSupportOverride('TextInput');
    });
});
