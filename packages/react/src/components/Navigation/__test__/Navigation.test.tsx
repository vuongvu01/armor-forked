/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 * https://github.com/testing-library/jest-dom
 * https://jestjs.io/docs/en/mock-functions
 */

import React, { useRef, MouseEvent } from 'react';

import { fireEvent, cleanup, render } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import cloneDeep from 'clone-deep';

import { structure } from './helpers';
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
        const { result } = renderHook(() => useRef(null));
        render(<Navigation ref={result.current} />);

        expect(result.current.current).toBeInstanceOf(HTMLElement);
    });

    it('should support custom theme', () => {
        // @ts-ignore
        expect(<Navigation>With custom theme</Navigation>).toSupportCustomTheme(
            'Navigation',
        );
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

    it('should cancel onElementClick with element onClick event.stopPropagation', async () => {
        const onNodeClick = jest.fn((event: MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
        });

        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].items[0].menuElementProps = {
            onClick: onNodeClick,
        };

        const onElementClick = jest.fn();
        const { getByText } = render(
            <Navigation
                items={localStructure}
                onElementClick={onElementClick}
            />,
        );

        const node = getByText('Hawk');
        expect(node).toBeInstanceOf(HTMLElement);
        fireEvent.click(node);

        expect(onNodeClick).toHaveBeenCalled();
        expect(onElementClick).not.toHaveBeenCalled();
    });

    it('should call onClick when onElementClick not set', async () => {
        const onNodeClick = jest.fn();

        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].items[0].menuElementProps = {
            onClick: onNodeClick,
        };

        const { getByText } = render(<Navigation items={localStructure} />);

        const node = getByText('Hawk');
        expect(node).toBeInstanceOf(HTMLElement);
        fireEvent.click(node);

        expect(onNodeClick).toHaveBeenCalled();
    });

    it('should make use of expandedElementIds', async () => {
        const expandedElementIds = ['birds', 'bugs'];
        const { container } = render(
            <Navigation
                items={structure}
                expandedElementIds={expandedElementIds}
            />,
        );

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('1');

        node = container.querySelector('[data-menuelementid="hawk"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('0');
    });

    it('should make use of expanded flag', async () => {
        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].expanded = true;
        // @ts-ignore
        localStructure[1].expanded = false;

        const { container } = render(<Navigation items={localStructure} />);

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('0');

        node = container.querySelector('[data-menuelementid="hawk"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('0');
    });

    it('should make use of selectedElementIds', async () => {
        const selectedElementIds = ['birds', 'bugs'];
        const { container } = render(
            <Navigation
                items={structure}
                selectedElementIds={selectedElementIds}
            />,
        );

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('1');

        node = container.querySelector('[data-menuelementid="hawk"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('0');
    });

    it('should make use of selected flag', async () => {
        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].selected = true;
        // @ts-ignore
        localStructure[1].selected = false;

        const { container } = render(<Navigation items={localStructure} />);

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('0');

        node = container.querySelector('[data-menuelementid="hawk"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('0');
    });

    it('should prefer expansion flag over list of ids', async () => {
        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].expanded = true;
        // @ts-ignore
        localStructure[1].expanded = false;

        const expandedElementIds = ['bugs'];

        const { container } = render(
            <Navigation
                items={localStructure}
                expandedElementIds={expandedElementIds}
            />,
        );

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-expanded')).toEqual('0');
    });

    it('should prefer selection flag over list of ids', async () => {
        const localStructure = cloneDeep(structure);
        // @ts-ignore
        localStructure[0].selected = true;
        // @ts-ignore
        localStructure[1].selected = false;

        const selectedElementIds = ['bugs'];

        const { container } = render(
            <Navigation
                items={localStructure}
                selectedElementIds={selectedElementIds}
            />,
        );

        let node = container.querySelector('[data-menuelementid="birds"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('1');

        node = container.querySelector('[data-menuelementid="bugs"]');
        expect(node).toBeInstanceOf(HTMLElement);
        expect(node!.getAttribute('data-selected')).toEqual('0');
    });
});
