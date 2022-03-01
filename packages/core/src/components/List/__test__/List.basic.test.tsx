/* eslint-disable import/no-extraneous-dependencies */

/**

 * https://github.com/sapegin/jest-cheat-sheet

 * https://testing-library.com/docs/react-testing-library/cheatsheet

 * https://github.com/testing-library/jest-dom

 * https://jestjs.io/docs/en/mock-functions

 */

import React, { useRef } from 'react';

import {
    // fireEvent,

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

// import userEvent from '@testing-library/user-event';

import { List } from '../List';

// import {Typography} from "@deliveryhero/armor"; List } from '../';

describe('<List />', () => {
    afterEach(async () => {
        cleanup();

        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        const { container, getByTestId } = render(<List />);

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

    it('should contain correct CSS classes and properties', () => {
        const result = render(<List />);

        // @ts-ignore

        expect(result.container).toHaveBEMStructure('List', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<List ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore

        expect(List).toSupportRestPropsForwarding('List');
    });

    it('should support component override', () => {
        // @ts-ignore

        expect(<List>Hello</List>).toSupportOverride('List');
    });

    it('should support margin properties', async () => {
        // @ts-ignore

        expect(List).toSupportMarginProps();
    });

    it('should forward correct properties', async () => {
        // @ts-ignore

        expect(List).toSupportAttributeForwarding();
    });
});
