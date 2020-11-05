/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import {
    cleanup,
    fireEvent,
    render,
    screen,
    wait,
    waitForElement,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { SideSheet } from '../SideSheet';
import { SideSheetHeader } from '../SideSheetHeader';
import { SideSheetBody } from '../SideSheetBody';
import { SideSheetFooter } from '../SideSheetFooter';
import {
    sideSheetBody,
    sideSheetContent,
    sideSheetFooter,
    sideSheetHeader,
    sideSheetHeaderCloseButtonContainer,
    sideSheetHeaderContainer,
    sideSheetRoot,
} from '../constants';
import { Dialog } from '../../Dialog';
import { Accordion, AccordionContent, AccordionHeader } from '../../Accordion';

const headerTitle = 'Header title';
const headerDescription = 'Header description';

const baseSideSheetComponent = (
    <SideSheet open={true}>
        <SideSheetHeader title={headerTitle} description={headerDescription} />
        <SideSheetBody>Body content</SideSheetBody>
        <SideSheetFooter>Footer actions</SideSheetFooter>
    </SideSheet>
);

describe('<SideSheet />', () => {
    afterEach(async () => {
        cleanup();
    });

    it('should render itself without errors', async () => {
        render(baseSideSheetComponent);
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());

        render(
            <SideSheet open={true} ref={result.current}>
                <SideSheetHeader
                    title={headerTitle}
                    description={headerDescription}
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>,
        );

        expect(result.current.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should ensure that header typography is as in the spec', () => {
        render(baseSideSheetComponent);

        const header = screen.getByText(headerTitle);
        expect(header).toBeInstanceOf(HTMLHeadingElement);
        expect(header).toHaveClass('Typography-Root--sectionTitle');

        const description = screen.getByText(headerDescription); // result.container.querySelector('.SideSheet-Root');
        expect(description).toBeInstanceOf(HTMLParagraphElement);
        expect(description).toHaveClass(
            'Typography-Root--paragraph Typography-Root--large',
        );
    });

    it('should ensure that all SideSheet sections have corresponding class names set', async () => {
        render(baseSideSheetComponent);

        const contentElement = screen.getByTestId(sideSheetContent);
        expect(contentElement).toHaveClass('SideSheet-Content');

        const headerContainerElement = screen.getByTestId(
            sideSheetHeaderContainer,
        );
        expect(headerContainerElement).toHaveClass('SideSheet-HeaderContainer');

        const headerElement = screen.getByTestId(sideSheetHeader);
        expect(headerElement).toHaveClass('SideSheet-Header');

        const headerIconElement = screen.getByTestId(
            sideSheetHeaderCloseButtonContainer,
        );
        expect(headerIconElement).toHaveClass('SideSheet-CloseIcon');

        const bodyElement = screen.getByTestId(sideSheetBody);
        expect(bodyElement).toHaveClass('SideSheet-Body');

        const footerElement = screen.getByTestId(sideSheetFooter);
        expect(footerElement).toHaveClass('SideSheet-Footer');
    });

    it('should ensure that unspecified sections are not rendered', async () => {
        const { queryByTestId } = render(
            <SideSheet
                isCloseButtonVisible={false}
                onSelect={() => {}}
                open={true}
            >
                <SideSheetBody>Body content</SideSheetBody>
            </SideSheet>,
        );

        const contentElement = queryByTestId('SideSheetContent');
        expect(contentElement).toHaveClass('SideSheet-Content');

        const headerElement = queryByTestId('SideSheetHeader');
        expect(headerElement).toBeNull();

        const headerIconElement = queryByTestId(
            'SideSheetHeaderCloseButtonContainer',
        );
        expect(headerIconElement).not.toBeInTheDocument();

        const bodyElement = queryByTestId('SideSheetBody');
        expect(bodyElement).toHaveClass('SideSheet-Body');

        const footerElement = queryByTestId('SideSheetFooter');
        expect(footerElement).not.toBeInTheDocument();
    });

    it('should contain modifiers for matching classes for: wide and disableOverlay', () => {
        render(
            <SideSheet disableOverlay open={true} wide>
                <SideSheetHeader
                    title={headerTitle}
                    description={headerDescription}
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>,
        );

        const contentElement = screen.getByTestId(sideSheetContent);
        expect(contentElement).toHaveClass(
            'SideSheet-Content--disableOverlay SideSheet-Content--wide',
        );

        const headerElement = screen.getByTestId(sideSheetHeader);
        expect(headerElement).toHaveClass(
            'SideSheet-Header--disableOverlay SideSheet-Header--wide',
        );
        const bodyElement = screen.getByTestId(sideSheetBody);
        expect(bodyElement).toHaveClass(
            'SideSheet-Body--disableOverlay SideSheet-Body--wide',
        );
        const footerElement = screen.getByTestId(sideSheetFooter);
        expect(footerElement).toHaveClass(
            'SideSheet-Footer--disableOverlay SideSheet-Footer--wide',
        );
    });

    it.skip('should ensure SideSheet is expanded on open=true', () => {
        render(
            <SideSheet open={true} effectToggle={true}>
                <SideSheetHeader
                    title={headerTitle}
                    description={headerDescription}
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>,
        );

        const containerExpandedElement = screen.getByTestId(sideSheetRoot);
        expect(containerExpandedElement).not.toHaveStyle('width: 0;');
    });

    it('should close itself by pressing ESC', async () => {
        const onClose = jest.fn();

        const { getByTestId } = render(
            <SideSheet open onClose={onClose}>
                <SideSheetHeader
                    title={headerTitle}
                    description={headerDescription}
                />
                <SideSheetBody>
                    <button data-testid="hello-btn">Hello</button>
                </SideSheetBody>
            </SideSheet>,
        );

        const button = await waitForElement(() => getByTestId('hello-btn'));

        fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });

        await wait(() => {
            expect(onClose).toHaveBeenCalled();
        });
    });
});
