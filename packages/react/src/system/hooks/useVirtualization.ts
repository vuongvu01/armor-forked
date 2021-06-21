import { RefObject, useEffect, useMemo, useState } from 'react';
import { ObjectLiteralType } from '../../type';
import { getWindow } from '../util/globals';
import { useResizeObserver } from './useResizeObserver';
import { useScrollObserver } from './useScrollObserver';

type UseVirtualizationProps = Partial<{
    averageItemHeight: number;
    itemSelector: string;
    parentContainerRef: RefObject<HTMLElement>;
}>;

type StateType = {
    topOffset: number;
    bottomOffset: number;
    rangeStart: number;
    rangeEnd: number;
};

const MIN_ITEM_HEIGHT = 36;
const MIN_SEGMENT_SIZE = 15;
const MAX_SAMPLE_SIZE = 100;
const INITIAL_STATE = {
    topOffset: 0,
    bottomOffset: 0,
    rangeStart: 0,
    rangeEnd: MIN_SEGMENT_SIZE * 2 - 1,
};

const win = getWindow();

const getListBox = <E extends HTMLElement>(ref: RefObject<E | undefined>) => {
    if (!ref || !ref.current) {
        return null;
    }

    return ref.current.getBoundingClientRect();
};

const useItemHeight = <D extends ObjectLiteralType, E extends HTMLElement>(
    enabled: boolean,
    data: D[],
    ref: RefObject<E | undefined>,
    averageItemHeight?: number,
    itemSelector?: string,
) => {
    const dataLength = data.length;
    const [dynamicAverageItemHeight, setDynamicAverageItemHeight] = useState(
        MIN_ITEM_HEIGHT,
    );
    useEffect(() => {
        if (
            !enabled ||
            averageItemHeight !== undefined ||
            !dataLength ||
            !ref.current
        ) {
            return;
        }

        const items = itemSelector
            ? ref.current?.querySelectorAll(itemSelector)
            : ref.current?.children;
        if (!items || !items.length) {
            return;
        }

        let height = 0;
        let count = 0;
        for (let i = 0; i < items.length; i += 1) {
            if (i > MAX_SAMPLE_SIZE) {
                break;
            }
            height += items[i].getBoundingClientRect().height;
            count += 1;
        }

        setDynamicAverageItemHeight(Math.ceil(height / count));
    }, [ref, averageItemHeight, enabled, dataLength, itemSelector]);

    return averageItemHeight !== undefined
        ? averageItemHeight
        : dynamicAverageItemHeight;
};

const makeState = <E extends HTMLElement>(
    enabled: boolean,
    ref: RefObject<E | undefined> | null,
    windowHeight: number,
    totalItemCount: number,
    itemHeight = MIN_ITEM_HEIGHT,
) => {
    if (!totalItemCount || !windowHeight || !enabled) {
        return INITIAL_STATE;
    }

    let bodyOffset = 0;
    if (ref) {
        const bodyBox = getListBox<E>(ref);
        if (!bodyBox) {
            return INITIAL_STATE;
        }

        bodyOffset = bodyBox.y;
    }

    const segmentSize = Math.max(
        Math.ceil(windowHeight / itemHeight),
        MIN_SEGMENT_SIZE,
    );
    const segmentHeight = segmentSize * itemHeight;
    const visibleSegment =
        bodyOffset >= 0
            ? 0
            : Math.floor((windowHeight - bodyOffset) / segmentHeight);

    let rangeStart = (visibleSegment - 1) * segmentSize;
    const rangeEnd = rangeStart + segmentSize * 3 - 1;
    if (rangeStart < 0) {
        rangeStart = 0;
    }

    let topOffset = rangeStart * itemHeight;
    if (topOffset < 0) {
        topOffset = 0;
    }
    const bottomOffset = (totalItemCount - rangeEnd) * itemHeight;

    return {
        topOffset,
        bottomOffset,
        rangeStart,
        rangeEnd,
    };
};

export const useVirtualization = <
    D extends ObjectLiteralType,
    E extends HTMLElement
>(
    enabled: boolean,
    containerRef: RefObject<E | undefined>,
    data: D[],
    {
        averageItemHeight,
        itemSelector,
        parentContainerRef,
    }: UseVirtualizationProps,
) => {
    const [windowHeight, setWindowHeight] = useState(win ? win.innerHeight : 0);
    const [windowOffset, setWindowOffset] = useState(0);
    const [state, setState] = useState<StateType | null>();

    useResizeObserver(enabled, setWindowHeight, undefined, {
        enableInitialCall: true,
        containerRef: parentContainerRef,
        throttleDelay: 100,
    });
    useScrollObserver(enabled, setWindowOffset, {
        enableInitialCall: true,
        containerRef: parentContainerRef,
        throttleDelay: 100,
    });

    const itemHeight = useItemHeight<D, E>(
        enabled,
        data,
        containerRef,
        averageItemHeight,
        itemSelector,
    );

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const newState = makeState<E>(
            enabled,
            containerRef,
            windowHeight,
            data.length,
            itemHeight,
        );
        if (newState) {
            if (
                state &&
                newState.topOffset === state.topOffset &&
                newState.bottomOffset === state.bottomOffset &&
                newState.rangeStart === state.rangeStart &&
                newState.rangeEnd === state.rangeEnd
            ) {
                return;
            }

            setState(newState);
        }
    }, [
        enabled,
        setState,
        data,
        containerRef,
        itemHeight,
        windowHeight,
        windowOffset,
    ]);

    const realState =
        state || makeState(enabled, null, windowHeight, data.length);

    const virtualData = useMemo(() => {
        return enabled
            ? data.slice(realState.rangeStart, realState.rangeEnd)
            : data;
    }, [enabled, data, realState]);

    return {
        data: virtualData,
        topOffset: realState.topOffset,
        bottomOffset: realState.bottomOffset,
        rangeStart: realState.rangeStart,
        rangeEnd: realState.rangeEnd,
    };
};
