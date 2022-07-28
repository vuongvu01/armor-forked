import { useState } from 'react';
import { generateId } from '@deliveryhero/armor-system';
import { ToastPropsType, ToastPositionType } from './type';
import {
    DEFAULT_AUTO_CLOSE,
    DEFAULT_AUTO_CLOSE_TIME,
    DEFAULT_PROGRESS_BAR_SHOW,
    DEFAULT_TOAST_POSITION,
    DEFAULT_PAUSE_ON_HOVER,
} from './constants';

type ToastState = {
    toasts: { [K in ToastPositionType]: ToastPropsType[] };
    isPausedAutoClose: boolean;
};

type ToastStore = {
    getState: () => ToastState;
    subscribe: (onStoreChange: () => void) => () => void;
    makeToast: (toast: ToastPropsType) => string;
    removeToast: (id: string, position: ToastPositionType) => void;
    clear: () => void;
};

type ToastListener = () => void;

const emptyState = {
    toasts: {
        topRight: [],
        topLeft: [],
        bottomRight: [],
        bottomLeft: [],
    },
    isPausedAutoClose: false,
};

function createStore(initialState: ToastState): ToastStore {
    let state = initialState;
    const listeners = new Set<ToastListener>();

    const setState = (setStateFn: (values: ToastState) => ToastState) => {
        state = setStateFn(state);
        listeners.forEach((l) => l());
    };

    const removeToast = (id: string, position: ToastPositionType) => {
        setState((prevState) => ({
            ...prevState,
            toasts: {
                ...prevState.toasts,
                [position]: prevState.toasts[position].filter(
                    (toast) => toast.id !== id,
                ),
            },
        }));
    };

    return {
        getState: () => state,

        subscribe: (listener) => {
            listeners.add(listener);
            return () => {
                setState(() => initialState);
                listeners.delete(listener);
            };
        },

        clear: () => setState(() => initialState),
        removeToast,

        makeToast: (toast) => {
            const {
                autoCloseTime = DEFAULT_AUTO_CLOSE_TIME,
                showProgressBar = DEFAULT_PROGRESS_BAR_SHOW,
                position = DEFAULT_TOAST_POSITION,
                autoClose = DEFAULT_AUTO_CLOSE,
                pauseOnHover = DEFAULT_PAUSE_ON_HOVER,
            } = toast;

            const toastId = generateId();

            const setPauseAutoClose = (isPaused: boolean) => {
                if (!autoClose || !pauseOnHover) {
                    return;
                }

                setState((prevState) => {
                    return {
                        ...prevState,
                        isPausedAutoClose: isPaused,
                    };
                });
            };

            const newToastProps = {
                id: toastId,
                autoCloseTime,
                showProgressBar,
                setPauseAutoClose,
                onClose: () => {
                    removeToast(toastId, position);
                    toast.onClose?.();
                },
            };

            setState((prevState) => {
                return {
                    ...prevState,
                    toasts: {
                        ...prevState.toasts,
                        [position]: [
                            { ...toast, ...newToastProps },
                            ...prevState.toasts[position as ToastPositionType],
                        ],
                    },
                };
            });

            return toastId;
        },
    };
}

/**
 * Store to track all the toast across all positions
 */
export const toastStore = createStore(emptyState);

export const useToastStore = () => {
    const [toastState, setToastState] = useState(() => toastStore.getState());

    toastStore.subscribe(() => setToastState(toastStore.getState()));

    return toastState;
};
