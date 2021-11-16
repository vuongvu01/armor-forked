/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useScrollObserver } from '../useScrollObserver';

describe('useScrollObserver', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        renderHook(() => useScrollObserver(true, () => {}));
    });

    // todo: write more tests to cover the entire functionality
});
