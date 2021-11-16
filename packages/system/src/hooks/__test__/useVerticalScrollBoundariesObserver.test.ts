/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useVerticalScrollBoundariesObserver } from '../useVerticalScrollBoundariesObserver';

describe('useVerticalScrollBoundariesObserver', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const containerRef = { current: null };
        const contentRef = { current: null };

        renderHook(() =>
            useVerticalScrollBoundariesObserver(
                containerRef,
                contentRef,
                () => {},
                () => {},
            ),
        );
    });

    // todo: write more tests to cover the entire functionality
});
