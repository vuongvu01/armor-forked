/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useScrollToNode } from '../useScrollToNode';

describe('useScrollToNode', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        renderHook(() => useScrollToNode({}));
    });

    it('should call scrollToNode without errors', async () => {
        const mockFn = jest.fn();
        const node = { scrollIntoView: mockFn } as unknown as HTMLElement;

        const {
            result: { current: scrollToNode },
        } = renderHook(() => useScrollToNode({ node }));

        scrollToNode();

        await waitFor(() => expect(mockFn).toBeCalledTimes(1));
    });
});
