import { useEffect, useRef, MutableRefObject } from 'react';

type Event = AnimationEvent &
    ClipboardEvent &
    CompositionEvent &
    DragEvent &
    FocusEvent &
    KeyboardEvent &
    MouseEvent &
    TouchEvent &
    PointerEvent &
    TransitionEvent &
    UIEvent &
    WheelEvent;

export const useEventListener = (
    eventName: string,
    handler: (event: Event) => void,
    element: MutableRefObject<any>,
    disabled?: boolean,
): void => {
    const savedHandler = useRef<any>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = !disabled && element?.current?.addEventListener;

        if (!isSupported) {
            return;
        }

        const node = element?.current;
        const eventListener = (event: Event) => savedHandler.current(event);

        node.addEventListener(eventName, eventListener);

        // eslint-disable-next-line consistent-return
        return () => {
            node?.removeEventListener?.(eventName, eventListener);
        };
    }, [eventName, element?.current, disabled]); // eslint-disable-line react-hooks/exhaustive-deps
};
