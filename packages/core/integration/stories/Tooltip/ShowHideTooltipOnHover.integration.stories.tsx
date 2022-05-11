import React from 'react';

import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from '../../../src/components/Button';
import { Tooltip } from '../../../src/components/Tooltip';

// Component mock implementation
export const ShowHideTooltipOnHover = () => {
    return (
        <Tooltip content="Hello world!">
            <Button>Hover to see tooltip</Button>
        </Tooltip>
    );
};

// Interactive tests with Play function
ShowHideTooltipOnHover.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const targetButton = await canvas.findByRole('button');

    // Show tooltip on hover
    await waitFor(() => {
        userEvent.hover(targetButton);
    });

    const hoverContent = await screen.findByText('Hello world!');

    await waitFor(() => {
        expect(hoverContent).toBeVisible();
    });

    // Hide tooltip when unhover
    await waitFor(() => {
        userEvent.unhover(targetButton);
        expect(hoverContent).not.toBeVisible();
    });
};

export default {
    title: 'Integration/Tooltip/ShowHideTooltipOnHover',
    component: ShowHideTooltipOnHover,
};
