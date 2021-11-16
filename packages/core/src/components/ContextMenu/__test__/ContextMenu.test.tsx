/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, fireEvent, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';

import { EllipsisVerticalIcon } from '@deliveryhero/armor-icons';
import { customTheme } from './helpers';
import { ContextMenu } from '..';
import { IconButton } from '../../IconButton';

describe('<ContextMenu />', () => {
    afterEach(async () => {
        cleanup();
        await cleanupHooks();
    });

    it('should render itself without errors', async () => {
        render(<ContextMenu />);
    });

    it('should contain correct CSS classes and properties', () => {
        const result = render(<ContextMenu open enablePortal={false} />);

        // @ts-ignore
        expect(result.container).toHaveBEMStructure('ContextMenu', {
            Root: [],
        });
    });

    it('should support forwardRef', () => {
        const { result } = renderHook(() => useRef(null));
        render(<ContextMenu ref={result.current} open />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support rest props forwarding', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportRestPropsForwarding('ContextMenu');
    });

    // todo: fix this
    it.skip('should support custom theme', () => {
        let tree = renderer
            .create(<ContextMenu open>With custom theme</ContextMenu>)
            .toJSON();

        // @ts-ignore
        expect(tree).not.toHaveStyleRule('border-width', '2px');

        tree = renderer
            .create(
                <ThemeProvider theme={customTheme}>
                    <ContextMenu open>With custom theme</ContextMenu>
                </ThemeProvider>,
            )
            .toJSON();

        // @ts-ignore
        expect(tree).toHaveStyleRule('border-width', '2px');
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support width properties', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportWidthAttributes();
    });

    // todo: fix (need to pass "open" prop)
    it.skip('should support height properties', async () => {
        // @ts-ignore
        expect(ContextMenu).toSupportHeightAttributes();
    });

    it('should support onMenuElementSelect', async () => {
        const onMenuElementSelect = jest.fn();

        const menuElements = [
            {
                id: 'edit',
                label: 'Edit',
            },
            {
                id: 'delete',
                label: 'Delete',
            },
        ];

        const { container } = render(
            <ContextMenu
                trigger={
                    <IconButton>
                        <EllipsisVerticalIcon large />
                    </IconButton>
                }
                defaultOpen
                menuElements={menuElements}
                onMenuElementSelect={onMenuElementSelect}
                enablePortal={false}
            />,
        );

        const element = container.querySelector('.MenuElement-Root');
        expect(element).toBeInTheDOM();

        fireEvent.click(element!);

        expect(onMenuElementSelect).toBeCalled();
        const args = onMenuElementSelect.mock.calls[0];
        expect(args[0]).toEqual('edit');
        expect(args[1]).toMatchObject({ id: 'edit', label: 'Edit' });
        expect(args[2].closeMenu).toBeInstanceOf(Function);

        args[2].closeMenu();

        const newElement = container.querySelector('.MenuElement-Root');
        expect(newElement).not.toBeInTheDOM();
    });
});
