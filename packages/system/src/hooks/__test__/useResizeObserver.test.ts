/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useResizeObserver } from '../useResizeObserver';

describe('useResizeObserver', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        renderHook(() =>
            useResizeObserver(
                true,
                () => {},
                () => {},
            ),
        );
    });

    // todo: write more tests to cover the entire functionality
});
