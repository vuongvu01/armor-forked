/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useOuterClick } from '../useOuterClick';

describe('useOuterClick', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const element = { current: null };

        renderHook(() => useOuterClick([element], () => {}));
    });

    // todo: write more tests to cover the entire functionality
});
