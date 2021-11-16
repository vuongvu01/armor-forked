/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useFlagState } from '../useFlagState';

describe('useFlagState', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should accept the default value', async () => {
        const {
            result: {
                current: [value],
            },
        } = renderHook(() => useFlagState(true));

        expect(value).toEqual(true);
    });

    // todo: write more tests to cover the entire functionality
});
