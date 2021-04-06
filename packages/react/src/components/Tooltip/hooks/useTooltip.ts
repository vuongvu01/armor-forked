import React, { ReactElement, useMemo, useRef } from 'react';
import { useEventProxy } from './useEventProxy';
import { validateTrigger } from '../utils/validateTrigger';
import { ReferenceType } from '../../../type';
import { TooltipPropsType } from '../type';
import { usePopper } from '../../../system/hooks/usePopper';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useOverlay } from '../../../system/hooks/useOverlay';

export const useTooltip = (
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

        // popper and portaling
        align,
        offset,
        allowedAutoPlacements,
        arrowPadding,
        zIndex,
        enablePortal,

        ...restProps
    }: TooltipPropsType,
    ref: ReferenceType,
) => {
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
    );

    const panelRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLElement>(null);

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
            onMouseOver: onMouseOverProxy,
            onMouseOut: onMouseOutProxy,
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
