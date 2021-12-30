/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useEventListener } from '../useEventListener';

describe('useEventListener', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const containerRef = { current: null };

        renderHook(() => useEventListener('click', () => {}, containerRef));
    });

    it('should add/remove event listener to node', async () => {
        const mockAddEvent = jest.fn();
        const mockRemoveEvent = jest.fn();

        const containerRef = {
            current: {
                addEventListener: mockAddEvent,
                removeEventListener: mockRemoveEvent,
            },
        };

        const { unmount } = renderHook(() =>
            useEventListener('click', () => {}, containerRef),
        );
        expect(mockAddEvent).toHaveBeenCalledTimes(1);

        unmount();
        expect(mockRemoveEvent).toHaveBeenCalledTimes(1);
    });

    it('should disable event when disabled flag is set', async () => {
        const mockAddEvent = jest.fn();
        const mockRemoveEvent = jest.fn();
        const disabled = true;

        const containerRef = {
            current: {
                addEventListener: mockAddEvent,
                removeEventListener: mockRemoveEvent,
            },
        };

        const { unmount } = renderHook(() =>
            useEventListener('click', () => {}, containerRef, disabled),
        );
        expect(mockAddEvent).not.toHaveBeenCalled();

        unmount();
        expect(mockRemoveEvent).not.toHaveBeenCalled();
    });
});
