/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { usePopper } from '../usePopper';

describe('usePopper', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const panelRef = { current: null };
        const triggerRef = { current: null };
        renderHook(() => usePopper(panelRef, triggerRef));
    });

    // todo: write more tests to cover the entire functionality
});
