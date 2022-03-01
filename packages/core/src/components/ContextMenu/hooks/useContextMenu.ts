import React, { useMemo, useRef, MouseEvent } from 'react';
import {
    usePopper,
    useOuterClick,
    useControlledFlagState,
    useOverlay,
    useRootRef,
} from '@deliveryhero/armor-system';

import { ContextMenuElement, ContextMenuPropsType } from '../type';
import { useEventProxy } from './useEventProxy';
import { RefType } from '../../../type';

const emptyMenuElements: ContextMenuElement[] = [];

export const useContextMenu = <E extends HTMLDivElement>(
    {
        children,
        menuElements,
        trigger,
        onMenuElementSelect,

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
    ref: RefType<E>,
) => {
    const [reallyOpen, setReallyOpen, , setClose] = useControlledFlagState(
        defaultOpen,
        open,
        onToggle !== undefined ? onToggle : onOpenChange,
    );

    const rootRef = useRootRef<E>(ref);
    const triggerRef = useRef<HTMLElement>();

    const { panelProps, arrowProps } = usePopper(rootRef, triggerRef, {
        align,
        arrowPadding,
        offset,
        allowedAutoPlacements,
    });
    useOuterClick([rootRef, triggerRef], setClose, reallyOpen);
    const { zIndex: realZIndex } = useOverlay(reallyOpen, { zIndex });

    const { onClickProxy } = useEventProxy(
        trigger,
        setReallyOpen,
        !!reallyOpen,
    );

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

    const smartMenuElements = useMemo(() => {
        if (!menuElements || !onMenuElementSelect) {
            return menuElements;
        }

        return menuElements.map((element) => {
            return {
                ...element,
                props: {
                    ...element.props,
                    onClick: (event: MouseEvent<HTMLDivElement>) => {
                        if (element.props && element.props.onClick) {
                            element.props.onClick(event);
                        }

                        if (event.isPropagationStopped()) {
                            return;
                        }

                        onMenuElementSelect(element.id, element, {
                            closeMenu: setClose,
                        });
                    },
                },
            };
        });
    }, [menuElements, onMenuElementSelect, setClose]);

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
        menuElements: smartMenuElements || emptyMenuElements,
        children,
    };
};
