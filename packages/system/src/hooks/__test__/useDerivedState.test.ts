/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';
import { useDerivedState } from '../useDerivedState';

describe('useDerivedState', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should not crash', async () => {
        const {
            result: { current },
        } = renderHook(() => useDerivedState<string>(() => 'foo', ['bar']));

        expect(current[0]).toEqual('foo');
    });

    // todo: write more tests to cover the entire functionality
});
