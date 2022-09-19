/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInputAction } from '../TextInputAction';

describe('<TextInputAction />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<TextInputAction />);
    });

    it('should handle onClick event', async () => {
        const mockOnClick = jest.fn();

        const { getByText } = render(
            <TextInputAction onClick={mockOnClick}>Action</TextInputAction>,
        );

        userEvent.click(getByText('Action'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
