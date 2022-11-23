/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { MultilineTruncateParagraph } from '..';

describe('<MultilineTruncateParagraph />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render without error', async () => {
        const { container } = render(<MultilineTruncateParagraph />);
        expect(container).toBeTruthy();
    });
});
