/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { fireEvent, cleanup, render } from '@testing-library/react';
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
        expect(<FileUploader>Hello</FileUploader>).toSupportCustomTheme(
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

    it('should trigger onFilesSelectMock event when select new file', () => {
        const onFilesSelectMock = jest.fn();
        const { getByTestId } = render(
            <FileUploader onFilesSelect={onFilesSelectMock} />,
        );

        const fileUploadInput = getByTestId('FileUploadButton-Input');
        fireEvent.change(fileUploadInput, { target: { files: [] } });
        expect(onFilesSelectMock).toHaveBeenCalledTimes(1);
    });
});
