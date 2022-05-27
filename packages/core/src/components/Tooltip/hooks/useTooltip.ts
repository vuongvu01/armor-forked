import React, { ReactElement, useMemo, useRef } from 'react';
import {
    usePopper,
    useControlledFlagState,
    useOverlay,
    useRootRef,
} from '@deliveryhero/armor-system';

import { useEventProxy } from './useEventProxy';
import { validateTrigger } from '../utils/validateTrigger';
import { RefType } from '../../../type';
import { TooltipPropsType } from '../type';

export const useTooltip = <E extends HTMLDivElement>(
    {
        children,
        trigger,
        content,

        open,
        defaultOpen,
        onOpenChange,

        /** @deprecated */
        onToggle,

        error,
        disableInteractive,

        // popper and portaling
        align,
        offset,
        allowedAutoPlacements,
        arrowPadding,
        zIndex,
        enablePortal,

        ...restProps
    }: TooltipPropsType,
    ref: RefType<E>,
) => {
    const panelRef = useRootRef<E>(ref);
    const triggerRef = useRef<HTMLDivElement>(null);

    const realTrigger = trigger || (children as ReactElement);
    const realContent = trigger ? (children as ReactElement) : content;

    const [reallyOpen, setReallyOpen] = useControlledFlagState(
        defaultOpen,
        open,
        onToggle !== undefined ? onToggle : onOpenChange,
    );
    const { onMouseOverProxy, onMouseOutProxy } = useEventProxy(
        children,
        setReallyOpen,
        panelRef,
        disableInteractive,
    );

    const { arrowProps, panelProps } = usePopper(panelRef, triggerRef, {
        align,
        offset,
        allowedAutoPlacements,
        arrowPadding,
    });
    const { zIndex: realZIndex } = useOverlay(reallyOpen, { zIndex });

    const validTrigger = validateTrigger(realTrigger);

    const triggerClone = useMemo(() => {
        if (!validTrigger) {
            return null;
        }

        return React.cloneElement(validTrigger, {
            ref: triggerRef,
            onMouseEnter: onMouseOverProxy,
            onMouseLeave: onMouseOutProxy,
        });
    }, [validTrigger, triggerRef, onMouseOverProxy, onMouseOutProxy]);

    return {
        trigger: triggerClone,

        portalProps: {
            enablePortal,
        },
        rootProps: {
            ...restProps,
            ...panelProps,
            ref: panelRef,
            error,
            zIndex: realZIndex,
        },
        arrowProps: {
            ...arrowProps,
            error,
        },

        content: realContent,
        open: reallyOpen,

        align,
        validTrigger,
    };
};
