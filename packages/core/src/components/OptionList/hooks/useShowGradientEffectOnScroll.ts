import { useState, useCallback, RefObject, useEffect } from 'react';
import { useScrollObserver, durationNormal } from '@deliveryhero/armor-system';

export const useShowGradientEffectOnScroll = (
    enabled: boolean,
    containerRef: RefObject<HTMLElement>,
) => {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isTopGradientEffectShown, setIsTopGradientEffectShown] =
        useState(false);
    const [isBottomGradientEffectShown, setIsBottomGradientEffectShown] =
        useState(false);

    useEffect(() => {
        if (containerRef?.current) {
            const listElement = containerRef.current;
            const isContentOverflowing =
                listElement.clientHeight < listElement.scrollHeight;

            setIsOverflowing(isContentOverflowing);
        }
    }, [containerRef?.current]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleScrollChange = useCallback(
        (scrollHeight: number) => {
            const listElement = containerRef?.current;
            if (!listElement) {
                return;
            }

            const isScrollAtTop = scrollHeight === 0;
            const isScrollAtBottom =
                scrollHeight &&
                scrollHeight >=
                    listElement.scrollHeight - listElement.clientHeight;

            setIsTopGradientEffectShown(!isScrollAtTop);
            setIsBottomGradientEffectShown(!isScrollAtBottom);
        },
        [containerRef],
    );

    useScrollObserver(enabled && isOverflowing, handleScrollChange, {
        enableInitialCall: true,
        containerRef,
        throttleDelay: durationNormal,
    });

    return {
        isTopGradientEffectShown,
        isBottomGradientEffectShown,
    };
};
