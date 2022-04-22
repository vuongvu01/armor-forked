import { RefObject, useCallback, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { getWindow } from '../util';

type UseWindowScrollObserverPropsType = Partial<{
    enableInitialCall: boolean;
    throttleDelay: number;
    containerRef: RefObject<HTMLElement>;
}>;

const win = getWindow();

/** @internal */
export const useScrollObserver = (
    enabled: boolean,
    onScrollChange?: (height: number) => void,
    {
        enableInitialCall,
        throttleDelay,
        containerRef,
    }: UseWindowScrollObserverPropsType = {},
): void => {
    const onChangeInternal = useCallback(() => {
        if (onScrollChange) {
            let scrollTop = 0;
            if (containerRef && containerRef.current) {
                scrollTop = containerRef.current.scrollTop;
            } else if (win) {
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
    }, [onScrollChange, containerRef]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeInternalDecorated = useCallback(
        throttle(throttleDelay || 0, false, onChangeInternal),
        [onChangeInternal, throttleDelay],
    );

    useEffect(() => {
        const containerNode = containerRef?.current;

        if (enabled) {
            if (enableInitialCall) {
                onChangeInternal();
            }

            if (containerNode) {
                containerNode.addEventListener(
                    'scroll',
                    onChangeInternalDecorated,
                );
            } else if (win) {
                win.addEventListener('scroll', onChangeInternalDecorated);
            }
        }

        return () => {
            if (enabled) {
                if (win) {
                    win.removeEventListener(
                        'scroll',
                        onChangeInternalDecorated,
                    );
                }

                if (containerNode) {
                    containerNode.removeEventListener(
                        'scroll',
                        onChangeInternalDecorated,
                    );
                }
            }
        };
    }, [
        containerRef,
        enabled,
        onChangeInternalDecorated,
        enableInitialCall,
        onChangeInternal,
    ]);
};
