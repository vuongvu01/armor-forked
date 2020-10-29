/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import {
    fireEvent,
    cleanup,
    render,
    // prettyDOM,
    // wait,
    // waitForElement,
} from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { customTheme } from './helpers';
import { PageNavigation } from '../..';

describe('<PageNavigation />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<PageNavigation />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<PageNavigation />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('PageNavigation', {
            Root: [],
            PageButton: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<PageNavigation ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(<PageNavigation>With custom theme</PageNavigation>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <PageNavigation>With custom theme</PageNavigation>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it.skip('should support margin attributes', async () => {
        // @ts-ignore
        expect(PageNavigation).toSupportMarginAttributes();
    });

    it('should go to the page by clicking on the number', async () => {
        const setPageNumber = jest.fn();
        const { container } = render(
            <PageNavigation
                itemCount={100}
                pageNumber={4}
                pageSize={10}
                onPageSelect={setPageNumber}
            />,
        );

        const button = container.querySelector('button[data-pagenumber="5"]');
        fireEvent.click(button!);

        expect(setPageNumber).toHaveBeenCalledWith(5);
    });

    it('should go to the next page by clicking on the right arrow', async () => {
        const setPageNumber = jest.fn();
        const { container } = render(
            <PageNavigation
                itemCount={100}
                pageNumber={4}
                pageSize={10}
                onPageSelect={setPageNumber}
            />,
        );

        const button = container.querySelector('button:last-child');
        fireEvent.click(button!);

        expect(setPageNumber).toHaveBeenCalledWith(5);
    });

    it('should go to the previous page by clicking on the left arrow', async () => {
        const setPageNumber = jest.fn();
        const { container } = render(
            <PageNavigation
                itemCount={100}
                pageNumber={4}
                pageSize={10}
                onPageSelect={setPageNumber}
            />,
        );

        const button = container.querySelector('button:first-child');
        fireEvent.click(button!);

        expect(setPageNumber).toHaveBeenCalledWith(3);
    });

    it('should not go to the next page by clicking on the right arrow when the last page is shown', async () => {
        const setPageNumber = jest.fn();
        const { container } = render(
            <PageNavigation
                itemCount={100}
                pageNumber={10}
                pageSize={10}
                onPageSelect={setPageNumber}
            />,
        );

        const button = container.querySelector('button:last-child');
        fireEvent.click(button!);

        expect(setPageNumber).not.toHaveBeenCalled();
    });

    it('should not go to the previous page by clicking on the left arrow when the first page is shown', async () => {
        const setPageNumber = jest.fn();
        const { container } = render(
            <PageNavigation
                itemCount={100}
                pageNumber={1}
                pageSize={10}
                onPageSelect={setPageNumber}
            />,
        );

        const button = container.querySelector('button:first-child');
        fireEvent.click(button!);

        expect(setPageNumber).not.toHaveBeenCalled();
    });
});
