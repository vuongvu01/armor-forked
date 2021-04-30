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

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Card).toSupportMarginAttributes();
    });

    it('should support padding attributes', async () => {
        // @ts-ignore
        expect(Card).toSupportPaddingAttributes();
    });

    it('should support size attributes', async () => {
        // @ts-ignore
        expect(Card).toSupportHeightAttributes();
        // @ts-ignore
        expect(Card).toSupportWidthAttributes();
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
