/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';

import { cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { Divider } from '../Divider';

describe('<Divider />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        const { container, getByTestId } = render(<Divider />);

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
        let result = render(<Divider />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Divider', {
            Root: ['horizontal'],
        });

        result = render(<Divider horizontal />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Divider', {
            Root: ['horizontal'],
        });

        result = render(<Divider vertical />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Divider', {
            Root: ['vertical'],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<Divider ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(Divider).toSupportRestPropsForwarding('Divider');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Divider).toSupportMarginAttributes();
    });
});
