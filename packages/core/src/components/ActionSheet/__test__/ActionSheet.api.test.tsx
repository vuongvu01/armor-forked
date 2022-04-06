/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';
import { ActionSheet } from '..';

describe('<ActionSheet />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should render custom text label', async () => {
        const { getByText } = render(<ActionSheet label="Custom label" />);

        expect(getByText('Custom label')).toBeInTheDocument();
    });

    it('should render custom node label', async () => {
        const { getByText } = render(
            <ActionSheet label={<div>Custom label</div>} />,
        );

        expect(getByText('Custom label')).toBeInTheDocument();
    });
});
