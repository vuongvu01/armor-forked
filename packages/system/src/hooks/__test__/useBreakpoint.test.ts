/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
} from '@testing-library/react-hooks';

import { useBreakpointUp, useBreakpointDown } from '../useBreakpoint';

describe('useBreakpoint', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    describe('useBreakpointUp', () => {
        it('should not crash', async () => {
            const {
                result: { current },
            } = renderHook(() => useBreakpointUp('xs'));

            expect(current).toEqual(true);
        });
    });

    describe('useBreakpointDown', () => {
        it('should not crash', async () => {
            const {
                result: { current },
            } = renderHook(() => useBreakpointDown('xs'));

            expect(current).toEqual(false);
        });
    });
});
