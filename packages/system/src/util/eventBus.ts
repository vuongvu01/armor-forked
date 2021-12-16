type EventBusEventListenerType = (event: CustomEvent<unknown>) => void;

/**
 * @internal
 */
export const eventBus = {
    on(event: string, callback: EventBusEventListenerType): void {
        document.addEventListener(
            event,
            callback as EventListenerOrEventListenerObject,
        );
    },

    off(event: string, callback: EventBusEventListenerType): void {
        document.removeEventListener(
            event,
            callback as EventListenerOrEventListenerObject,
        );
    },

    dispatch(event: string, data?: unknown): void {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
};
