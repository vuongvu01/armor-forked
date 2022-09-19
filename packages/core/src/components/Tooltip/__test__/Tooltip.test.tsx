/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Button, Tooltip } from '../..';

describe('<Tooltip />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(<Tooltip />);
    });

    it('should work with trigger that is an disabled element', async () => {
        render(
            <Tooltip content="Hello">
                <Button disabled>Disabled trigger</Button>
            </Tooltip>,
        );

        const triggerWrapper = screen.getByText('Disabled trigger')
            .parentNode as HTMLElement;

        // simulate mouseover event

        userEvent.hover(triggerWrapper);

        await waitFor(() => {
            const tooltip = screen.queryByText('Hello');

            expect(tooltip).toBeVisible();
        });

        // simulate mouseleave event

        userEvent.unhover(triggerWrapper);

        await waitFor(() => {
            const tooltip = screen.queryByText('Hello');

            expect(tooltip).not.toBeInTheDocument();
        });
    });
});
