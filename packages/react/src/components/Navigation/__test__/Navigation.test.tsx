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

import { customTheme, structure } from './helpers';
import { Navigation } from '..';

describe('<Navigation />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<Navigation />);
    });

    it('should contain correct CSS classes and attributes', () => {
        const result = render(<Navigation />);
        // @ts-ignore
        expect(result.container).toHaveBEMStructure('Navigation', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef());
        render(<Navigation ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        let tree = renderer
            .create(<Navigation>With custom theme</Navigation>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <Navigation>With custom theme</Navigation>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    it('should support margin attributes', async () => {
        // @ts-ignore
        expect(Navigation).toSupportMarginAttributes();
    });

    it('should support width attributes', async () => {
        // @ts-ignore
        expect(Navigation).toSupportWidthAttributes();
    });

    it('should call onElementClick', async () => {
        const onElementClick = jest.fn();
        const { getByText } = render(
            <Navigation items={structure} onElementClick={onElementClick} />,
        );

        const node = getByText('Ladybug');
        expect(node).toBeInstanceOf(HTMLElement);
        fireEvent.click(node);

        expect(onElementClick).toHaveBeenCalledWith('ladybug', {
            label: 'Ladybug',
            id: 'ladybug',
        });
    });
});
