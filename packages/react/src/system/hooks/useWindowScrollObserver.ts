import { useCallback, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { getWindow } from '../util/globals';

const win = getWindow();

/** @internal */
export const useWindowScrollObserver = (
    enabled: boolean,
    onScrollChange?: (height: number) => void,
    enableInitialCall?: boolean,
) => {
    const onChangeInternal = useCallback(() => {
        if (onScrollChange) {
            let scrollTop = 0;
            if (win) {
                scrollTop =
                    win.scrollY ||
                    win.pageYOffset ||
                    document.body.scrollTop +
                        ((document.documentElement &&
                            document.documentElement.scrollTop) ||
                            0);
            }
            onScrollChange(scrollTop);
        }
    }, [onScrollChange, win]);

    const onChangeInternalDecorated = useCallback(
        throttle(100, false, onChangeInternal),
        [onChangeInternal],
    );

    useEffect(() => {
        if (enabled && enableInitialCall) {
            onChangeInternal();
        }

        if (enabled && win) {
            win.addEventListener('scroll', onChangeInternalDecorated);
        }
        return () => {
            if (enabled && win) {
                win.removeEventListener('scroll', onChangeInternalDecorated);
            }
        };
    }, [win, enabled, onChangeInternalDecorated, enableInitialCall]);
};
