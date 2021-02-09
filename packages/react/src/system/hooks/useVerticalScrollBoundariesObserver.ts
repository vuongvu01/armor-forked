import { RefObject, useCallback, WheelEvent } from 'react';
import { throttle } from 'throttle-debounce';

const getHeight = (element: HTMLElement) =>
    element.getBoundingClientRect().height;

const detectProximity = throttle(
    500,
    (
        deltaY: number,
        containerRef: RefObject<HTMLDivElement>,
        contentRef: RefObject<HTMLDivElement>,
        onHitTop?: () => void,
        onHitBottom?: () => void,
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
            onHitTop();
        }
        if (
            deltaY > 0 &&
            containerScrollTop + containerHeight >= contentHeight &&
            onHitBottom
        ) {
            onHitBottom();
        }
    },
);

export const useVerticalScrollBoundariesObserver = (
    containerRef: RefObject<HTMLDivElement>,
    contentRef: RefObject<HTMLDivElement>,
    onHitTop?: () => void,
    onHitBottom?: () => void,
) => {
    const onWheel = useCallback(
        (event: WheelEvent<HTMLDivElement>) => {
            detectProximity(
                event.deltaY,
                containerRef,
                contentRef,
                onHitTop,
                onHitBottom,
            );
        },
        [containerRef, contentRef, onHitTop, onHitBottom],
    );

    return {
        onWheel,
    };
};
