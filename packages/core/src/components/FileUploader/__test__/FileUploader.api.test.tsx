/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { fireEvent, cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { FileUploader } from '..';

describe('<FileUploader />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
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

    it('should render text props', () => {
        const { getByText } = render(
            <FileUploader
                title="this is a title"
                description="this is a description"
                uploadButtonParams={{
                    buttonLabel: 'Select file to upload',
                }}
            />,
        );

        [
            'this is a title',
            'this is a description',
            'Select file to upload',
        ].forEach((text) => expect(getByText(text)).toBeInTheDocument());
    });
});
