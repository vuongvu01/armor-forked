import { createElement, useEffect } from 'react';
import { render } from 'react-dom';
import { getWindow, zIndexToast, ScalarType } from '@deliveryhero/armor-system';

import { ToastPropsType, ToastHookPropsType } from '../type';
import { TOAST_PORTAL_CONTAINER_ID } from '../constants';
import { toastStore } from '../ToastStore';
import { ToastContainer } from '../ToastContainer';

type RenderToastContainer = {
    zIndex?: number;
    gap?: ScalarType;
};

const renderToastContainer = ({ zIndex, gap }: RenderToastContainer) => {
    const portalId = TOAST_PORTAL_CONTAINER_ID;

    const window = getWindow();
    if (!window) {
        return;
    }

    const doesExist = !!document.getElementById(portalId);

    if (doesExist) {
        return;
    }

    const container = document.createElement('div');
    container.setAttribute('id', portalId);
    container.setAttribute('data-testid', portalId);
    container.setAttribute(
        'style',
        `position: fixed; z-index: ${zIndex || zIndexToast}`,
    );
    document.body.prepend(container);

    render(
        createElement(ToastContainer, { gap }),
        document.getElementById(portalId),
    );
};

export const useToastContainer = (props?: ToastHookPropsType) => {
    const { gap, zIndex, ...restProps } = props || {};

    const makeToast = (newToast: ToastPropsType) => {
        toastStore.makeToast({
            ...restProps,
            ...newToast,
        });
    };

    useEffect(() => {
        renderToastContainer({ zIndex, gap });
    }, [gap, zIndex]);

    return { makeToast };
};
