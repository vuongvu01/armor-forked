import React from 'react';

import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import {
    Accordion,
    AccordionHeader,
    AccordionContent,
} from '../../../src/components/Accordion';

// Component mock implementation
export const TogglesContentWhenClickingOnTitle = () => {
    return (
        <>
            <Accordion>
                <AccordionHeader title="Developers" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>
            <Accordion>
                <AccordionHeader title="Support" />
                <AccordionContent>
                    Please contact us at our Slack channel
                </AccordionContent>
            </Accordion>
        </>
    );
};

// Interactive tests with Play function
TogglesContentWhenClickingOnTitle.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if the content is visible after clicking on the titles 1 by 1
    const titleOne = await canvas.findByText('Developers');
    await waitFor(() => {
        userEvent.click(titleOne);
    });
    const contentOne = await canvas.findByText('Get coffee');

    await waitFor(() => {
        expect(contentOne).toBeVisible();
    });

    const titleTwo = await canvas.findByText('Support');
    await waitFor(() => {
        userEvent.click(titleTwo);
    });
    const contentTwo = await canvas.findByText(
        'Please contact us at our Slack channel',
    );

    await waitFor(() => {
        expect(contentTwo).toBeVisible();
    });

    // Check if the content is not visible after clicking on the titles again
    await waitFor(() => {
        userEvent.click(titleOne);
        userEvent.click(titleTwo);
    });

    await waitFor(() => {
        expect(contentOne).not.toBeVisible();
        expect(contentTwo).not.toBeVisible();
    });
};

export default {
    title: 'Integration/Accordion/TogglesContentWhenClickingOnTitle',
    component: TogglesContentWhenClickingOnTitle,
};
