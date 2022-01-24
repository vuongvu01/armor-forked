import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    WidthPropsType,
    ThemeType,
    ScalarType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ToastEffectivePropsType = Partial<{
    /** The id will automatically be generated when adding a new toast */
    id: string;
    /** The toast message */
    message: string;
    /** Toast level */
    level: 'error' | 'warning' | 'info' | 'success';
    /** Toast level: error */
    error: boolean;
    /** Toast level: warning */
    warning: boolean;
    /** Toast level: info */
    info: boolean;
    /** Toast level: success */
    success: boolean;
    /** A callback is fired when toast is closed */
    onClose: () => void;
    /** Show/hide close button */
    disableCloseButton: boolean;
    /** Show/hide toast level icon */
    disableIcon: boolean;
    /** Enable auto close */
    autoClose: boolean;
    /** Custom auto close time */
    autoCloseTime: number;
    /** Show progress bar when auto close is enable */
    showProgressBar: boolean;
    /** Action button */
    action: {
        label: string;
        onClick: () => void;
    };
    /** Put the progress bar auto run on hold */
    isPaused: boolean;
    /** Set the pause status to the toast container */
    setPauseAutoClose: (isPause: boolean) => void;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType &
    ThemeType;

export type ToastPropsType = ToastEffectivePropsType & ComponentStylePropsType;

export type ToastRootPropsType = ToastEffectivePropsType &
    ComponentElementStylePropsType;

export type ToastPositionType =
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft';

export type ToastHookPropsType = Partial<{
    /** The gap between toasts */
    gap: ScalarType;
    /** Position of the toast */
    position: ToastPositionType;
    /** Enable auto close */
    autoClose: boolean;
    /** Custom auto close time */
    autoCloseTime: number;
    /** Show progress bar when auto close is enable */
    showProgressBar: boolean;
    /** The z-index attribute of the toast container */
    zIndex: number;
    /** Pause the progress bar when hovering on toast */
    pauseOnHover: boolean;
}> &
    WidthPropsType &
    MarginPropsType;

export type ToastContainerPropsType = {
    rootProps: {
        gap: ScalarType;
        position: ToastPositionType;
    };
    getToastProps: (toast: ToastPropsType) => {
        autoCloseTime: number;
        showProgressBar: boolean;
        autoClose: boolean;
    };
    toasts: ToastPropsType[];
};
