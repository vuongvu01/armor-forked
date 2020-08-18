/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { SideSheet } from '../SideSheet';
import { SideSheetHeader } from '../SideSheetHeader';
import { SideSheetBody } from '../SideSheetBody';
import { SideSheetFooter } from '../SideSheetFooter';

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

        const contentElement = screen.getByTestId('SideSheetContent');
        expect(contentElement).toHaveClass('SideSheet-Content');

        const headerContainerElement = screen.getByTestId(
            'SideSheetHeaderContainer',
        );
        expect(headerContainerElement).toHaveClass('SideSheet-HeaderContainer');

        const headerElement = screen.getByTestId('SideSheetHeader');
        expect(headerElement).toHaveClass('SideSheet-Header');

        const headerIconElement = screen.getByTestId(
            'SideSheetHeaderCloseButtonContainer',
        );
        expect(headerIconElement).toHaveClass('SideSheet-CloseIcon');

        const bodyElement = screen.getByTestId('SideSheetBody');
        expect(bodyElement).toHaveClass('SideSheet-Body');

        const footerElement = screen.getByTestId('SideSheetFooter');
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

        const contentElement = screen.getByTestId('SideSheetContent');
        expect(contentElement).toHaveClass(
            'SideSheet-Content--disableOverlay SideSheet-Content--wide',
        );

        const headerElement = screen.getByTestId('SideSheetHeader');
        expect(headerElement).toHaveClass(
            'SideSheet-Header--disableOverlay SideSheet-Header--wide',
        );
        const bodyElement = screen.getByTestId('SideSheetBody');
        expect(bodyElement).toHaveClass(
            'SideSheet-Body--disableOverlay SideSheet-Body--wide',
        );
        const footerElement = screen.getByTestId('SideSheetFooter');
        expect(footerElement).toHaveClass(
            'SideSheet-Footer--disableOverlay SideSheet-Footer--wide',
        );
    });

    it('should ensure SideSheet is hidden on open=false', () => {
        render(
            <SideSheet open={false}>
                <SideSheetHeader
                    title={headerTitle}
                    description={headerDescription}
                />
                <SideSheetBody>Body content</SideSheetBody>
                <SideSheetFooter>Footer actions</SideSheetFooter>
            </SideSheet>,
        );

        const containerHiddenElement = screen.getByTestId('SideSheetRoot');
        expect(containerHiddenElement).toHaveStyle('width: 0;');
    });

    it('should ensure SideSheet is expanded on open=true', () => {
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

        const containerExpandedElement = screen.getByTestId('SideSheetRoot');
        expect(containerExpandedElement).not.toHaveStyle('width: 0;');
    });
});
