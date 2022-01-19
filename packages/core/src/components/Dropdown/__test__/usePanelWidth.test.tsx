/* eslint-disable import/no-extraneous-dependencies */

import { RefObject } from 'react';
import { cleanup } from '@testing-library/react';
import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { usePanelWidth } from '../hooks/usePanelWidth';

jest.mock('@deliveryhero/armor-system', () => ({
    RESIZE_OBSERVER_SUPPORTED: true,
}));

describe('usePanelWidth', () => {
    // @ts-ignore
    const savedObserver = global.ResizeObserver;
    const MockObserve = jest.fn();
    const MockDisconnect = jest.fn();

    beforeAll(() => {
        class ResizeObserver {
            observe = MockObserve;
            disconnect = MockDisconnect;
            unobserve() {}
        }
        // @ts-ignore
        global.ResizeObserver = ResizeObserver;
    });

    afterAll(() => {
        // @ts-ignore
        global.ResizeObserver = savedObserver;
    });

    afterEach(async () => {
        await cleanup();
        await cleanupHooks();
        MockObserve.mockClear();
        MockDisconnect.mockClear();
    });

    it('should not crash', async () => {
        const containerRef = { current: null };
        const dropdownRef = { current: null };

        renderHook(() => usePanelWidth(containerRef, dropdownRef));
    });

    it('should update dropdown width when dropdown is shown', async () => {
        const containerRef = {
            current: { offsetWidth: 999 },
        } as RefObject<HTMLElement>;
        const dropdownRef = {
            current: { style: {} },
        } as RefObject<HTMLElement>;
        const isDropdownShown = true;

        renderHook(() =>
            usePanelWidth(containerRef, dropdownRef, isDropdownShown),
        );

        // @ts-ignore
        expect(dropdownRef.current.style.width).toBe('999px');
    });

    it('should connect/disconnect Observer', async () => {
        const containerRef = { current: {} } as RefObject<HTMLElement>;
        const dropdownRef = { current: {} } as RefObject<HTMLElement>;

        const { unmount } = renderHook(() =>
            usePanelWidth(containerRef, dropdownRef),
        );

        expect(MockObserve).toHaveBeenCalledTimes(1);
        expect(MockObserve).toHaveBeenCalledWith(containerRef.current);

        unmount();
        expect(MockDisconnect).toHaveBeenCalledTimes(1);
    });
});
