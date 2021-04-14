import React, { useMemo, useRef } from 'react';
import { ContextMenuElements, ContextMenuPropsType } from '../type';
import { useEventProxy } from './useEventProxy';
import { ReferenceType } from '../../../type';
import { useInternalRef } from '../../../utils';
import { usePopper } from '../../../system/hooks/usePopper';
import { useOuterClick } from '../../../system/hooks/useOuterClick';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useOverlay } from '../../../system/hooks/useOverlay';

const emptyMenuElements: ContextMenuElements = [];

export const useContextMenu = (
    {
        children,
        menuElements,
        trigger,

        open,
        defaultOpen,
        onOpenChange,
        onToggle,

        // popper and portaling
        align,
        offset,
        allowedAutoPlacements,
        arrowPadding,
        zIndex,
        enablePortal,

        ...restProps
    }: ContextMenuPropsType,
    ref: ReferenceType,
) => {
    const [reallyOpen, setReallyOpen, , setClose] = useControlledFlagState(
        defaultOpen,
        open,
        onToggle !== undefined ? onToggle : onOpenChange,
    );

    const rootRef = useRef<HTMLElement>();
    useInternalRef(ref, rootRef);

    const triggerRef = useRef<HTMLElement>();

    const { panelProps, arrowProps } = usePopper(rootRef, triggerRef, {
        align,
        arrowPadding,
        offset,
        allowedAutoPlacements,
    });
    useOuterClick([rootRef, triggerRef], setClose, reallyOpen);
    const { zIndex: realZIndex } = useOverlay(reallyOpen, { zIndex });

    const { onClickProxy } = useEventProxy(trigger, setReallyOpen, reallyOpen);

    const triggerClone = useMemo(() => {
        if (!trigger) {
            return null;
        }

        return React.cloneElement(trigger, {
            ref: triggerRef,
            onClick: onClickProxy,
        });
    }, [trigger, triggerRef, onClickProxy]);

    const displayChildren = !!children;
    const displayMenuElements = !displayChildren && !!menuElements;

    return {
        portalProps: {
            enablePortal,
        },
        rootProps: {
            ...restProps,
            ref: rootRef,
            ...panelProps,
            displayMenuElements,
            zIndex: realZIndex,
        },
        arrowProps,
        trigger: triggerClone,
        open: reallyOpen,
        displayChildren,
        displayMenuElements,
        menuElements: menuElements || emptyMenuElements,
        children,
    };
};
