import { RefObject, useCallback, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { getWindow } from '../util';
import { RESIZE_OBSERVER_SUPPORTED } from '../util/compatibility';

type UseWindowResizeObserverPropsType = Partial<{
    enableInitialCall: boolean;
    throttleDelay: number;
    containerRef: RefObject<HTMLElement>;
}>;

const win = getWindow();

/** @internal */
export const useResizeObserver = (
    enabled: boolean,
    onHeightChange?: (height: number) => void,
    onWidthChange?: (width: number) => void, // reserved
    {
        enableInitialCall,
        throttleDelay,
        containerRef,
    }: UseWindowResizeObserverPropsType = {},
): void => {
    const onChangeInternal = useCallback(() => {
        if (onHeightChange) {
            let height = 0;
            if (containerRef && containerRef.current) {
                height = containerRef.current.getBoundingClientRect().height;
            } else if (win) {
                height = win.innerHeight;
            }

            onHeightChange(height);
        }
    }, [onHeightChange, containerRef]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeInternalDecorated = useCallback(
        throttle(throttleDelay || 0, false, onChangeInternal),
        [onChangeInternal, throttleDelay],
    );

    useEffect(() => {
        const validContainer = containerRef && containerRef.current;

        const observer =
            enabled && validContainer && RESIZE_OBSERVER_SUPPORTED
                ? // @ts-ignore
                  new ResizeObserver(() => onChangeInternalDecorated())
                : null;

        if (enabled) {
            if (enableInitialCall) {
                onChangeInternal();
            }

            if (observer && containerRef?.current) {
                observer.observe(containerRef.current);
            } else if (win) {
                win.addEventListener('resize', onChangeInternalDecorated);
            }
        }

        return () => {
            if (enabled) {
                if (win) {
                    win.removeEventListener(
                        'resize',
                        onChangeInternalDecorated,
                    );
                }

                if (observer) {
                    observer.disconnect();
                }
            }
        };
    }, [
        enabled,
        onChangeInternalDecorated,
        enableInitialCall,
        containerRef,
        onChangeInternal,
    ]);
};
