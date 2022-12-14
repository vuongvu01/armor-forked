import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    durationNormal,
    ThemeProvider,
    makeDefaultTheme,
} from '@deliveryhero/armor-system';

import { useToastClassNames } from './hooks';
import { ToastPositionType, ToastContainerPropsType } from './type';
import { TOAST_CONTAINER_PREFIX } from './constants';
import { Toast } from './Toast';
import { ToastContainerRoot } from './style';
import { useToastStore } from './ToastStore';

export const ToastContainer: FC<
    React.PropsWithChildren<ToastContainerPropsType>
> = ({ theme, gap }) => {
    const classNames = useToastClassNames(TOAST_CONTAINER_PREFIX);
    const { toasts, isPausedAutoClose } = useToastStore();
    const defaultTheme = makeDefaultTheme();

    return (
        <ThemeProvider theme={theme || defaultTheme}>
            {(Object.keys(toasts) as ToastPositionType[]).map((position) => (
                <ToastContainerRoot
                    className={classNames.Root}
                    key={position}
                    position={position}
                    gap={gap}
                >
                    <TransitionGroup className={classNames.Group}>
                        {toasts[position].map((toast) => (
                            <CSSTransition
                                key={toast.id}
                                timeout={durationNormal}
                                className={classNames.Item}
                            >
                                <Toast {...toast} isPaused={isPausedAutoClose}>
                                    {toast.message}
                                </Toast>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ToastContainerRoot>
            ))}
        </ThemeProvider>
    );
};
