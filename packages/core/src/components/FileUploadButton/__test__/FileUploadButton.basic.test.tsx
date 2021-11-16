/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FileUploadButton } from '..';

describe('<FileUploadButton />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FileUploadButton />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FileUploadButton />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FileUploadButton', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FileUploadButton ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FileUploadButton).toSupportRestPropsForwarding(
            'FileUploadButton',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FileUploadButton).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore
        expect(FileUploadButton).toSupportAttributeForwarding();
    });
});
