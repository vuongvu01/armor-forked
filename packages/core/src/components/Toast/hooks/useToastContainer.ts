import { createElement, useEffect } from 'react';
import { render } from 'react-dom';
import {
    getWindow,
    zIndexToast,
    RootThemeType,
    ScalarType,
} from '@deliveryhero/armor-system';
import { useTheme } from 'styled-components';

import { ToastPropsType, ToastHookPropsType } from '../type';
import { TOAST_PORTAL_CONTAINER_ID } from '../constants';
import { toastStore } from '../ToastStore';
import { ToastContainer } from '../ToastContainer';

type RenderToastContainer = {
    zIndex?: number;
    gap?: ScalarType;
    theme: RootThemeType;
};

const renderToastContainer = ({ zIndex, gap, theme }: RenderToastContainer) => {
    const portalId = TOAST_PORTAL_CONTAINER_ID;

    const window = getWindow();
    if (!window) {
        return;
    }

    let toastContainer = document.getElementById(portalId);

    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.setAttribute('id', portalId);
        toastContainer.setAttribute('data-testid', portalId);
        document.body.prepend(toastContainer);
        toastContainer.setAttribute(
            'style',
            `position: fixed; z-index: ${zIndex || zIndexToast}`,
        );
    }

    render(createElement(ToastContainer, { theme, gap }), toastContainer);
};

export const useToastContainer = (props?: ToastHookPropsType) => {
    const { gap, zIndex, ...restProps } = props || {};
    const theme = useTheme() as RootThemeType;

    const makeToast = (newToast: ToastPropsType) => {
        toastStore.makeToast({
            ...restProps,
            ...newToast,
        });
    };

    useEffect(() => {
        renderToastContainer({ zIndex, gap, theme });
    }, [gap, theme, zIndex]);

    return { makeToast };
};
