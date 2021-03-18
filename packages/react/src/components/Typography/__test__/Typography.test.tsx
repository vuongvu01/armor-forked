/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React, { useRef } from 'react';
import {
    // fireEvent,
    cleanup,
    render,
    // prettyDOM,
    // wait,
    // waitForElement,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { Typography } from '../..';

describe('<Typography />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Typography />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Typography />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Typography', {
            Root: [],
        });
    });

    it.skip('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Typography ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Typography).toSupportMarginAttributes();
    });

    it('should support color attributes', async () => {
        // @ts-ignore
        expect(Typography).toSupportColorAttributes();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(Typography).toSupportAttributeForwarding();
    });
});
