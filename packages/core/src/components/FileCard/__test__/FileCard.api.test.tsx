/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, screen, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { FileCard } from '..';

describe('<FileCard />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should show file size info', () => {
        render(<FileCard fileSize={1} />);

        const fileSizeText = screen.queryByText('1 Bytes');

        expect(fileSizeText).toBeInTheDocument();
    });

    it('should hide file size info', () => {
        render(<FileCard />);

        const fileSizeText = screen.queryByText('0 Bytes');

        expect(fileSizeText).not.toBeInTheDocument();
    });

    it('should render cancel button when upload is in progress', () => {
        render(<FileCard uploadProgress={50} />);

        const cancelButton = screen.getByTestId('FileCard-CancelButton');

        expect(cancelButton).toBeInTheDocument();
    });

    it('should not render cancel button when upload is in progress', () => {
        render(<FileCard uploadProgress={50} hideCancelButton />);

        const cancelButton = screen.queryByTestId('FileCard-CancelButton');

        expect(cancelButton).not.toBeInTheDocument();
    });
});
