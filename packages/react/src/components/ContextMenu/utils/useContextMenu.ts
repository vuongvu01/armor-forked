import React, {
    MutableRefObject,
    useState,
    useMemo,
    useRef,
    useCallback,
} from 'react';
import { usePopper } from 'react-popper';
import { ContextMenuElements, ContextMenuPropsType } from '../type';
import { useEventProxy } from './useEventProxy';
import { ReferenceType } from '../../../type';
import { useInternalRef } from '../../../utils';
import useOuterClick from '../../../utils/useDetectClickOutsideComponent';
import { useControlledState } from '../../../system/hooks/useControlledState';

const emptyMenuElements: ContextMenuElements = [];

export const useContextMenu = (
    {
        children,
        menuElements,
        trigger,
        align,
        open,
        onToggle,
        ...restProps
    }: ContextMenuPropsType,
    ref: ReferenceType,
) => {
    const [reallyOpen, setReallyOpen] = useControlledState<boolean>(
        false,
        onToggle,
        open,
    );

    const rootRef = useRef<HTMLElement>(null);
    useInternalRef(ref, rootRef);

    const triggerRef = useRef<HTMLElement>();

    // the ref for the arrow must be a callback ref
    const [arrowRef, setArrowRef] = useState(null);

    const { styles, attributes } = usePopper(
        triggerRef.current,
        rootRef.current,
        {
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
            placement: align,
        },
    );

    const onOuterClick = useCallback(() => {
        setReallyOpen(false);
    }, [setReallyOpen]);
    useOuterClick(
        rootRef as MutableRefObject<HTMLElement>,
        onOuterClick,
        true, // !hidden,
        triggerRef as MutableRefObject<HTMLElement>,
    );

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
        rootProps: {
            ...restProps,
            ref: rootRef,
            style: styles.popper,
            ...attributes.popper,
            displayMenuElements,
        },
        arrowProps: {
            ref: setArrowRef as any,
            style: styles.arrow,
        },
        trigger: triggerClone,
        open: reallyOpen,
        displayChildren,
        displayMenuElements,
        menuElements: menuElements || emptyMenuElements,
        children,
    };
};
