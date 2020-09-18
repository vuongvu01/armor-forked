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
    // fireEvent,
    cleanup,
    render,
    prettyDOM,
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
import { Table } from '../..';

describe('<Table />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        const { container, getByTestId } = render(<Table />);

        // // ///////////////////////
        // // a short cheat sheet
        //
        // // how to print out current DOM
        // console.log(prettyDOM(container));
        //
        // // how to search for elements
        // const node = container.querySelector(
        //     '.some-selector'
        // ) as HTMLElement;
        // const anotherNode = getByTestId('search-input') as HTMLElement;
        //
        // // how to check element type
        // expect(node).toBeInstanceOf(HTMLAnchorElement);
        // expect(node).toHaveAttribute('href', 'https://google.com');
        //
        // // how to fire events
        // fireEvent.click(button);
        // fireEvent.change(input, { target: { value: 'some value' } });
        //
        // // how to wait for an assertion to be fulfilled
        // await wait(() => {
        //     expect(something).toBeTrue();
        // });
        //
        // // how to wait for async events to change the DOM:
        // const element = await waitForElement(
        //     () => getByTestId(container, 'element'),
        //     { container, timeout: 1000 }
        // );
        //
        // expect(element).toBeInstanceOf(HTMLElement);
        //
        // userEvent.type(input, 'Max Mustermann');
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Table />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Table', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Table ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        let tree = renderer.create(<Table>With custom theme</Table>).toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <Table>With custom theme</Table>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Table).toSupportMarginAttributes();
    });
});
