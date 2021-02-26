import { RefObject, useCallback, WheelEvent as WheelEventReact } from 'react';
import { throttle } from 'throttle-debounce';

const getHeight = (element: HTMLElement) =>
    element.getBoundingClientRect().height;

const detectProximity = (
    deltaY: number,
    containerRef: RefObject<HTMLDivElement>,
    contentRef: RefObject<HTMLDivElement>,
    onHitTop?: (event?: WheelEvent) => void,
    onHitBottom?: (event?: WheelEvent) => void,
    event?: WheelEvent,
) => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
        return;
    }

    const containerHeight = getHeight(container);
    if (!containerHeight) {
        return;
    }

    const contentHeight = getHeight(content);
    if (!contentHeight) {
        return;
    }

    const containerScrollTop = container.scrollTop;
    if (deltaY < 0 && containerScrollTop <= 0 && onHitTop) {
        onHitTop(event);
    }
    if (
        deltaY > 0 &&
        containerScrollTop + containerHeight >= contentHeight &&
        onHitBottom
    ) {
        onHitBottom(event);
    }
};

export const useVerticalScrollBoundariesObserver = (
    containerRef: RefObject<HTMLDivElement>,
    contentRef: RefObject<HTMLDivElement>,
    onHitTop?: () => void,
    onHitBottom?: () => void,
) => {
    const detectProximityDecorated = useCallback(
        throttle(500, detectProximity),
        [],
    );

    const onWheel = useCallback(
        (event: WheelEventReact<HTMLDivElement>) => {
            detectProximityDecorated(
                event.deltaY,
                containerRef,
                contentRef,
                onHitTop,
                onHitBottom,
            );
        },
        [
            containerRef,
            contentRef,
            onHitTop,
            onHitBottom,
            detectProximityDecorated,
        ],
    );

    return {
        onWheel,
    };
};
