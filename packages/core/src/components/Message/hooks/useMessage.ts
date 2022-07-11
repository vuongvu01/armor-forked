import { useRootRef } from '@deliveryhero/armor-system';

import { MessagePropsType } from '../type';
import { RefType } from '../../../type';
import { useIconComponent } from './useIconComponent';

export const useMessage = <E extends HTMLDivElement>(
    {
        level,
        error,
        warning,
        info,
        success,
        iconTag,
        disableCloseButton,
        disableIcon,
        actions,
        extra,
        onClose,
        ...restProps
    }: MessagePropsType,
    ref: RefType<E>,
) => {
    const innerRef = useRootRef<E>(ref);

    const IconTag = useIconComponent({
        level,
        error,
        warning,
        info,
        success,
        iconTag,
    });

    return {
        rootProps: {
            ...restProps,
            ref: innerRef,
            disableCloseButton,
            level,
            error,
            warning,
            info,
            success,
        },
        getIconProps: () => ({
            level,
            error,
            warning,
            info,
            success,
            medium: true,
        }),
        IconTag,
        showIcon: !disableIcon,
        showActions: !!actions,
        actions,
        showExtra: !!extra,
        extra,
        showCloseButton: !disableCloseButton,
        getCloseButtonProps: () => ({
            onClick: onClose,
            tabIndex: -1,
        }),
    };
};
