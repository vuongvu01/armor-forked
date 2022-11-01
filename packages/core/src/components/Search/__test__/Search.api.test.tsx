/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Search } from '../..';

describe('<Search />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should show default loading state', () => {
        const { getByText } = render(<Search isLoading />);
        const element = getByText('Loading results...');
        expect(element).toBeInTheDocument();
    });

    it('should show custom loading state', () => {
        const { getByText } = render(
            <Search isLoading loadingPlaceholder="Looking for result..." />,
        );
        const element = getByText('Looking for result...');
        expect(element).toBeInTheDocument();
    });
});
