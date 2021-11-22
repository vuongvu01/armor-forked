/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useDisplayEffects } from '../useDisplayEffects';

describe('useDisplayEffects', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const {
            result: { current },
        } = renderHook(() => useDisplayEffects(true));

        expect(current).toMatchObject({ display: true, effectToggle: false });
    });

    // todo: write more tests to cover the entire functionality
});
