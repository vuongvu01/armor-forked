/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React, { useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { Card } from '..';

describe('<Card />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Card />);
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(Card).toSupportMarginProps();
    });

    it('should support padding properties', async () => {
        // @ts-ignore
        expect(Card).toSupportPaddingProps();
    });

    it('should support size properties', async () => {
        // @ts-ignore
        expect(Card).toSupportHeightProps();
        // @ts-ignore
        expect(Card).toSupportWidthProps();
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Card ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Card).toSupportRestPropsForwarding('Card');
    });
});
