/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useDocumentKeydown } from '../useDocumentKeydown';

describe('useDocumentKeyDown', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        renderHook(() => useDocumentKeydown(() => {}));
    });

    // todo: write more tests to cover the entire functionality
});
