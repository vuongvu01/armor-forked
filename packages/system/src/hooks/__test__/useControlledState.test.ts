/* eslint-disable import/no-extraneous-dependencies */

import {
    renderHook,
    cleanup as cleanupHooks,
    act,
} from '@testing-library/react-hooks';
import { useControlledState } from '../useControlledState';

describe('useControlledState', () => {
    afterEach(async () => {
        await cleanupHooks();
    });

    it('should select uncontrolled state', async () => {
        const { result } = renderHook(() => useControlledState('a'));
        const { current } = result;

        expect(current[0]).toEqual('a');
        expect(current[2]).toEqual(false);
    });

    it('should select controlled state', async () => {
        const { result } = renderHook(() => useControlledState('a', 'b'));
        const { current } = result;

        expect(current[0]).toEqual('b');
        expect(current[2]).toEqual(true);
    });

    it('should process onChange in uncontrolled state', async () => {
        const onChange = jest.fn();
        const { result } = renderHook(() =>
            useControlledState<string>('a', undefined, onChange),
        );
        const [, onRealValueChange] = result.current;

        expect(result.current[0]).toEqual('a');

        act(() => {
            onRealValueChange('b');
        });
        expect(result.current[0]).toEqual('b');

        expect(onChange).toBeCalledWith('b');
    });

    it('should process onChange in controlled state', async () => {
        const onChange = jest.fn();
        let value = 'a';
        const { result, rerender } = renderHook(() =>
            useControlledState<string>(undefined, value, onChange),
        );
        const [, onRealValueChange] = result.current;

        expect(result.current[0]).toEqual('a');

        act(() => {
            onRealValueChange('b');
        });
        // still should be 'a', because in the controlled state we wait for the outer value to be changed
        expect(result.current[0]).toEqual('a');

        act(() => {
            value = 'b'; // like we changed it from the outside
            rerender();
        });
        expect(result.current[0]).toEqual('b');

        expect(onChange).toBeCalledWith('b');
    });
});
