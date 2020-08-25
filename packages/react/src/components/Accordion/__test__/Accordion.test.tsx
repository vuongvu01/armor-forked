/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

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

    it('should render itself without errors', async () => {
        render(<Accordion />);
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
        expect(headerElement).toHaveClass('AccordionHeader-Header');

        const headerTitleElement = screen.getByTestId(
            accordionHeaderTypography,
        );
        expect(headerTitleElement).toHaveClass(
            'AccordionHeader-HeaderTitle Typography-Root--label Typography-Root--large',
        );

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
            'AccordionHeader-Header AccordionHeader-Header--expanded',
        );

        const headerTitleElement = screen.getByTestId(
            accordionHeaderTypography,
        );
        expect(headerTitleElement).toHaveClass(
            'AccordionHeader-HeaderTitle AccordionHeader-HeaderTitle--expanded Typography-Root--label Typography-Root--large',
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

    it('ensures margin* property transference', () => {
        const marginAttribute = 'marginY';
        const marginValue = 4;

        const result = render(
            <Accordion {...{ [marginAttribute]: marginValue }}>
                <AccordionHeader title="Developers" />
                <AccordionContent>Get coffee</AccordionContent>
            </Accordion>,
        );

        // @ts-ignore
        expect(result).toSupportMarginAttributes(
            accordionRoot,
            marginAttribute,
            marginValue,
        );
    });
});
