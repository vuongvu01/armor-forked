import React from 'react';

import { screen, userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from '../../../src/components/Button';
import { Tooltip } from '../../../src/components/Tooltip';
import { sleep } from '../util';

export const HideTooltipWhenDisableInteractiveOption = () => {
    return (
        <Tooltip content="Hello world!" disableInteractive>
            <Button>Hover to see tooltip</Button>
        </Tooltip>
    );
};

HideTooltipWhenDisableInteractiveOption.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const targetButton = await canvas.findByRole('button');

    await waitFor(() => {
        userEvent.hover(targetButton);
    });

    const tooltipElement = await screen.findByText('Hello world!');

    await waitFor(() => {
        userEvent.unhover(targetButton);
        userEvent.hover(tooltipElement);
    });

    // wait to see if the tooltip is disappear
    await sleep(1000);

    await waitFor(() => {
        expect(tooltipElement).not.toBeVisible();
    });
};

export default {
    title: 'Integration/Tooltip/HideTooltipWhenDisableInteractiveOption',
    component: HideTooltipWhenDisableInteractiveOption,
};
