/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
    act,
} from '@testing-library/react-hooks';
import { useControlledFlagState } from '../useControlledFlagState';

describe('useControlledFlagState', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should select uncontrolled state', async () => {
        const { result } = renderHook(() => useControlledFlagState(true));
        const { current } = result;

        expect(current[0]).toEqual(true);
    });

    it('should select controlled state', async () => {
        const { result } = renderHook(() =>
            useControlledFlagState(true, false),
        );
        const { current } = result;

        expect(current[0]).toEqual(false);
    });

    it('should process onChange in uncontrolled state', async () => {
        const onChange = jest.fn();
        const { result } = renderHook(() =>
            useControlledFlagState(true, undefined, onChange),
        );
        const [, onRealValueChange] = result.current;

        expect(result.current[0]).toEqual(true);

        act(() => {
            onRealValueChange(false);
        });
        expect(result.current[0]).toEqual(false);

        expect(onChange).toBeCalledWith(false);
    });

    it('should process onChange in controlled state', async () => {
        const onChange = jest.fn();
        let value = true;
        const { result, rerender } = renderHook(() =>
            useControlledFlagState(undefined, value, onChange),
        );
        const [, onRealValueChange] = result.current;

        expect(result.current[0]).toEqual(true);

        act(() => {
            onRealValueChange(false);
        });
        // still should be 'a', because in the controlled state we wait for the outer value to be changed
        expect(result.current[0]).toEqual(true);

        act(() => {
            value = false; // like we changed it from the outside
            rerender();
        });
        expect(result.current[0]).toEqual(false);

        expect(onChange).toBeCalledWith(false);
    });

    // todo: write more tests to cover the entire functionality
});
