import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { durationNormal } from '@deliveryhero/armor-system';

import { useToastClassNames } from './hooks';
import { ToastContainerPropsType } from './type';
import { TOAST_CONTAINER_PREFIX } from './constants';
import { Toast } from './Toast';
import { ToastContainerRoot } from './style';

export const ToastContainer: FC<ToastContainerPropsType> = (props) => {
    const classNames = useToastClassNames(TOAST_CONTAINER_PREFIX);

    const { rootProps, getToastProps, toasts } = props;

    return (
        <ToastContainerRoot className={classNames.Root} {...rootProps}>
            <TransitionGroup className={classNames.Group}>
                {toasts.map((toast) => (
                    <CSSTransition
                        key={toast.id}
                        timeout={durationNormal}
                        className={classNames.Item}
                    >
                        <Toast {...getToastProps(toast)}>{toast.message}</Toast>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ToastContainerRoot>
    );
};
