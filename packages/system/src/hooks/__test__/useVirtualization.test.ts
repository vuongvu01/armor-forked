/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useVirtualization } from '../useVirtualization';

describe('useVirtualization', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const containerRef = { current: null };

        renderHook(() => useVirtualization(true, containerRef, [], {}));
    });

    // todo: write more tests to cover the entire functionality
});
