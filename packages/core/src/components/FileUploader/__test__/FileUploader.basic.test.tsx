/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { FileUploader } from '..';

describe('<FileUploader />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<FileUploader />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<FileUploader />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('FileUploader', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<FileUploader ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(FileUploader).toSupportRestPropsForwarding('FileUploader');
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<FileUploader>Hello</FileUploader>).toSupportOverride(
            'FileUploader',
        );
    });

    it('should support margin properties', async () => {
        // @ts-ignore
        expect(FileUploader).toSupportMarginProps();
    });

    it('should forward correct attributes', async () => {
        // @ts-ignore
        expect(FileUploader).toSupportAttributeForwarding();
    });
});
