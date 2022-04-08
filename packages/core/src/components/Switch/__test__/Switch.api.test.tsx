/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';
import { cleanup as cleanupHooks } from '@testing-library/react-hooks';

import { Switch } from '..';

describe('<Switch />', () => {
    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
    });

    it('should accept label prop', async () => {
        const { getByText } = render(<Switch label="switch label" />);
        expect(getByText('switch label')).toBeInTheDocument();
    });

    it('should accept defaultChecked prop and trigger onChange on click uncontrolled', async () => {
        const mockOnChange = jest.fn();
        const { getByText } = render(
            <Switch
                onChange={(e) => mockOnChange(e.target.checked)}
                label="switch label"
                defaultChecked={true}
            />,
        );
        const switchEle = getByText('switch label');

        fireEvent.click(switchEle);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(false);
    });

    it('should accept checked prop and trigger onChange on click controlled', async () => {
        const mockOnChange = jest.fn();
        const { getByText } = render(
            <Switch
                onChange={(e) => mockOnChange(e.target.checked)}
                label="switch label"
                checked={false}
            />,
        );
        const switchEle = getByText('switch label');

        fireEvent.click(switchEle);
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it('should accept disabled prop and do not trigger onChange on click', async () => {
        const mockOnChange = jest.fn();
        const { getByText } = render(
            <Switch
                onChange={(e) => mockOnChange(e.target.checked)}
                label="switch label"
                disabled
            />,
        );
        const switchEle = getByText('switch label');

        fireEvent.click(switchEle);
        expect(mockOnChange).not.toHaveBeenCalled();
    });
});
