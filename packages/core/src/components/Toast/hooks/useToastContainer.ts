import {
    useState,
    useCallback,
    createElement,
    useEffect,
    useMemo,
} from 'react';
import { render } from 'react-dom';
import { getWindow, generateId } from '@deliveryhero/armor-system';

import { useToastPortal } from '.';
import { ToastPropsType, ToastHookPropsType } from '../type';
import {
    DEFAULT_AUTO_CLOSE,
    DEFAULT_AUTO_CLOSE_TIME,
    DEFAULT_PROGRESS_BAR_SHOW,
    DEFAULT_TOAST_POSITION,
    DEFAULT_GAP_SPACING,
    DEFAULT_PAUSE_ON_HOVER,
} from '../constants';
import { ToastContainer } from '../ToastContainer';

const win = getWindow();

export const useToastContainer = (props?: ToastHookPropsType) => {
    const [toasts, setToasts] = useState<ToastPropsType[]>([]);
    const [isPausedAutoClose, setPauseAutoClose] = useState(false);
    const { loaded, portalId } = useToastPortal(props?.zIndex);

    const {
        autoClose = DEFAULT_AUTO_CLOSE,
        autoCloseTime = DEFAULT_AUTO_CLOSE_TIME,
        showProgressBar = DEFAULT_PROGRESS_BAR_SHOW,
        position = DEFAULT_TOAST_POSITION,
        gap = DEFAULT_GAP_SPACING,
        pauseOnHover = DEFAULT_PAUSE_ON_HOVER,
        ...restProps
    } = props || {};

    const removeToast = useCallback((id) => {
        setToasts((allToasts) => allToasts.filter((toast) => toast.id !== id));
    }, []);

    const makeToast = useCallback((toast) => {
        setToasts((allToasts) => [
            { ...toast, id: generateId() },
            ...allToasts,
        ]);
    }, []);

    const containerProps = useMemo(
        () => ({
            rootProps: {
                gap,
                position,
                ...restProps,
            },
            getToastProps: (toast: ToastPropsType) => ({
                autoClose,
                autoCloseTime,
                showProgressBar,
                isPaused: isPausedAutoClose,
                setPauseAutoClose: (isPaused: boolean) =>
                    autoClose && pauseOnHover && setPauseAutoClose(isPaused),
                ...toast,
                onClose: () => {
                    removeToast(toast.id);
                    toast.onClose?.();
                },
            }),
            toasts,
        }),
        [
            autoClose,
            autoCloseTime,
            gap,
            isPausedAutoClose,
            pauseOnHover,
            position,
            removeToast,
            restProps,
            showProgressBar,
            toasts,
        ],
    );

    useEffect(() => {
        if (loaded && win) {
            render(
                createElement(ToastContainer, { ...containerProps }),
                document.getElementById(portalId),
            );
        }
    }, [containerProps, loaded, portalId]);

    return { makeToast };
};
