/**
 * @internal
 */
export const eventBus = {
    on(event: string, callback: EventListenerOrEventListenerObject): void {
        document.addEventListener(event, callback);
    },

    off(event: string, callback: EventListenerOrEventListenerObject): void {
        document.removeEventListener(event, callback);
    },

    dispatch(event: string, data?: unknown): void {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
};
