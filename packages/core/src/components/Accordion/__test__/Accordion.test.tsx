/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { Accordion } from '../Accordion';
import {
    accordionContent,
    accordionHeaderIcon,
    accordionHeaderRoot,
    accordionHeaderTypography,
    accordionRoot,
} from '../constants';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionContent } from '../AccordionContent';

describe('<Accordion />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should ensure that all Accordion sections have corresponding class names set', async () => {
        render(
            <Accordion>
                <AccordionHeader title="Developers" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        const rootElement = screen.getByTestId(accordionRoot);
        expect(rootElement).toHaveClass('Accordion-Root');

        const headerElement = screen.getByTestId(accordionHeaderRoot);
        expect(headerElement).toHaveClass('AccordionHeader-Root');

        const headerTitleElement = screen.getByTestId(
            accordionHeaderTypography,
        );
        expect(headerTitleElement).toHaveClass('AccordionHeader-HeaderTitle');

        const headerIconElement = screen.getByTestId(accordionHeaderIcon);
        expect(headerIconElement).toHaveClass('AccordionHeader-IconContainer');

        const contentElement = screen.getByTestId(accordionContent);
        expect(contentElement).toHaveClass('AccordionContent-Content');
    });

    it('should ensure that expanded state is reflected in class names', async () => {
        render(
            <Accordion defaultExpanded>
                <AccordionHeader title="Developers" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        const rootElement = screen.getByTestId(accordionRoot);
        expect(rootElement).toHaveClass('Accordion-Root--expanded');

        const headerElement = screen.getByTestId(accordionHeaderRoot);
        expect(headerElement).toHaveClass(
            'AccordionHeader-Root AccordionHeader-Root--expanded',
        );

        const headerTitleElement = screen.getByTestId(
            accordionHeaderTypography,
        );
        expect(headerTitleElement).toHaveClass(
            'AccordionHeader-HeaderTitle AccordionHeader-HeaderTitle--expanded',
        );

        const headerIconElement = screen.getByTestId(accordionHeaderIcon);
        expect(headerIconElement).toHaveClass(
            'AccordionHeader-IconContainer--expanded',
        );

        const contentElement = screen.getByTestId(accordionContent);
        expect(contentElement).toHaveClass(
            'AccordionContent-Content--expanded',
        );
    });

    it('should trigger onToggle handler uncontrolled', () => {
        const mockOnToggle = jest.fn();

        const { getByText } = render(
            <Accordion onToggle={(_, expanded) => mockOnToggle(expanded)}>
                <AccordionHeader title="accordion_header" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        fireEvent.click(getByText('accordion_header'));

        expect(mockOnToggle).toHaveBeenCalledTimes(1);
        expect(mockOnToggle).toHaveBeenCalledWith(true);
    });

    it('should accept defaultExpanded and trigger onToggle handler uncontrolled', () => {
        const mockOnToggle = jest.fn();

        const { getByText } = render(
            <Accordion
                defaultExpanded
                onToggle={(_, expanded) => mockOnToggle(expanded)}
            >
                <AccordionHeader title="accordion_header" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        fireEvent.click(getByText('accordion_header'));

        expect(mockOnToggle).toHaveBeenCalledTimes(1);
        expect(mockOnToggle).toHaveBeenCalledWith(false);
    });

    it('should trigger onToggle handler controlled', () => {
        const mockOnToggle = jest.fn();

        const { getByText } = render(
            <Accordion
                expanded
                onToggle={(_, expanded) => mockOnToggle(expanded)}
            >
                <AccordionHeader title="accordion_header" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        fireEvent.click(getByText('accordion_header'));
        fireEvent.click(getByText('accordion_header'));

        expect(mockOnToggle).toHaveBeenCalledTimes(2);
        expect(mockOnToggle).toHaveBeenNthCalledWith(1, false);
        expect(mockOnToggle).toHaveBeenNthCalledWith(2, false);
    });

    it('should accept disabled prop', () => {
        const mockOnToggle = jest.fn();

        const { getByText } = render(
            <Accordion disabled onToggle={mockOnToggle}>
                <AccordionHeader title="accordion_header" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        fireEvent.click(getByText('accordion_header'));
        expect(mockOnToggle).not.toHaveBeenCalled();
    });
});
