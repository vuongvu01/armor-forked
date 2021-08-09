type EventHandlerType = (data: CustomEvent<unknown>) => void;

/**
 * @internal
 */
export const eventBus = {
    on(event: string, callback: EventHandlerType) {
        // @ts-ignore
        document.addEventListener(event, callback);
    },
    off(event: string, callback: EventHandlerType) {
        // @ts-ignore
        document.removeEventListener(event, callback);
    },
    dispatch(event: string, data?: unknown) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
};
