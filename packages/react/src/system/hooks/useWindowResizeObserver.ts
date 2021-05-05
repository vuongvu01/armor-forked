import { useCallback, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { getWindow } from '../util/globals';

const win = getWindow();

/** @internal */
export const useWindowResizeObserver = (
    enabled: boolean,
    onHeightChange?: (height: number) => void,
    onWidthChange?: (width: number) => void, // reserved
    enableInitialCall?: boolean,
) => {
    const onChangeInternal = useCallback(() => {
        if (onHeightChange) {
            onHeightChange(win ? win.innerHeight : 0);
        }
    }, [onHeightChange, win]);

    const onChangeInternalDecorated = useCallback(
        throttle(100, false, onChangeInternal),
        [onChangeInternal],
    );

    useEffect(() => {
        if (enabled && enableInitialCall) {
            onChangeInternal();
        }

        if (enabled && win) {
            win.addEventListener('resize', onChangeInternalDecorated);
        }
        return () => {
            if (enabled && win) {
                win.removeEventListener('resize', onChangeInternalDecorated);
            }
        };
    }, [win, enabled, onChangeInternalDecorated, enableInitialCall]);
};
