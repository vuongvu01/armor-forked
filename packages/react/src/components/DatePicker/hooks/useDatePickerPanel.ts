import { useRef } from 'react';
import { useDatePickerPopper } from './useDatePickerPopper';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useInternalRef } from '../../../utils';
import { ReferenceType } from '../../../type';
import { DatePickerEffectiveGenericPropsType } from '../type';
import { useOverlay } from '../../../system/hooks/useOverlay';
import { useOuterClick } from '../../../system/hooks/useOuterClick';

export const useDatePickerPanel = <V>(
    {
        open,
        defaultOpen,
        onOpenChange,
        zIndex,
        enablePortal,
        ...restProps
    }: DatePickerEffectiveGenericPropsType<V>,
    ref: ReferenceType,
) => {
    const {
        dropdownRef,
        triggerRef,
        dropdownProps,
        arrowProps,
    } = useDatePickerPopper();

    // main panel open/close
    const [reallyOpen, , , setClose, toggleOpen] = useControlledFlagState(
        defaultOpen,
        open,
        onOpenChange,
    );

    const { zIndex: realZIndex } = useOverlay(reallyOpen, { zIndex });

    // root component reference
    const rootRef = useRef<HTMLElement>(null);
    useInternalRef(ref, rootRef);

    // main panel close on outer click
    useOuterClick([rootRef, dropdownRef], setClose, reallyOpen);

    return {
        rootRef,
        inputRef: triggerRef,

        reallyOpen,
        toggleOpen,
        setClose,

        portalProps: {
            enablePortal,
        },
        dropdownProps: {
            ...dropdownProps,
            zIndex: realZIndex,
        },
        arrowProps,
        restProps,
    };
};
