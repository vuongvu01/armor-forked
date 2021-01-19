import React, { ReactElement, useMemo, useRef } from 'react';
import { useEventProxy } from './useEventProxy';
import { validateTrigger } from './validateTrigger';
import { ReferenceType } from '../../../type';
import { TooltipPropsType } from '../type';
import { useControlledState } from '../../../system/hooks/useControlledState';
import { usePopper } from '../../../system/hooks/usePopper';

export const useTooltip = (
    {
        children,
        trigger,
        content,

        open,
        defaultOpen,
        onToggle,

        align,
        error,

        ...restProps
    }: TooltipPropsType,
    ref: ReferenceType,
) => {
    const realTrigger = trigger || (children as ReactElement);
    const realContent = trigger ? (children as ReactElement) : content;

    const [reallyOpen, setReallyOpen] = useControlledState(
        defaultOpen,
        onToggle,
        open,
    );
    const { onMouseOverProxy, onMouseOutProxy } = useEventProxy(
        children,
        setReallyOpen,
    );

    const panelRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLElement>(null);

    const { arrowProps, panelProps } = usePopper(panelRef, triggerRef, align);

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
        rootProps: {
            ...restProps,
            ...panelProps,
            ref: panelRef,
            error,
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
