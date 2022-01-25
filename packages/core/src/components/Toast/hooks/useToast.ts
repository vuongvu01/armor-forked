import { useRootRef } from '@deliveryhero/armor-system';

import { getProgressBarPreset } from '../utils';
import { ToastPropsType } from '../type';
import { RefType } from '../../../type';

export const useToast = <E extends HTMLElement>(
    {
        level,
        success,
        info,
        error,
        warning,
        onClose,
        disableIcon,
        disableCloseButton,
        action,
        showProgressBar,
        autoClose,
        autoCloseTime,
        message,
        isPaused,
        setPauseAutoClose,
        ...restProps
    }: ToastPropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    return {
        rootProps: {
            level,
            success,
            info,
            error,
            warning,
            ref: innerRef,
            onMouseOver: () => setPauseAutoClose?.(true),
            onMouseLeave: () => setPauseAutoClose?.(false),
            ...restProps,
        },
        getMessageProps: () => ({
            level,
            success,
            info,
            error,
            warning,
            onClose,
            disableIcon,
            disableCloseButton,
        }),
        getProgressBarContainerProps: () => ({
            isHidden: !showProgressBar,
        }),
        getProgressBarProps: () => ({
            preset: getProgressBarPreset({
                level,
                success,
                info,
                error,
                warning,
            }),
            autoRun: true,
            duration: autoCloseTime,
            onFinish: onClose,
            isPaused,
        }),
        message,
        autoClose,
        showAction: !!action,
        getActionProps: () => ({ onClick: action?.onClick }),
        getActionLabel: () => action?.label,
    };
};
