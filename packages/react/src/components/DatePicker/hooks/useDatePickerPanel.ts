import { MutableRefObject, RefObject, useRef } from 'react';
import { useDatePickerPopper } from './useDatePickerPopper';
import { useControlledFlagState } from '../../../system/hooks/useControlledFlagState';
import { useInternalRef } from '../../../utils';
import useOuterClick from '../../../utils/useDetectClickOutsideComponent';
import { ReferenceType } from '../../../type';
import { DatePickerEffectiveGenericPropsType } from '../type';

export const useDatePickerPanel = <V>(
    {
        open,
        defaultOpen,
        onOpenChange,
        ...restProps
    }: DatePickerEffectiveGenericPropsType<V>,
    ref: ReferenceType,
) => {
    const {
        dropdownRef,
        triggerRef,
        setArrowRef,
        styles,
        attributes,
    } = useDatePickerPopper();

    // main panel open/close
    const [reallyOpen, , , setClose, toggleOpen] = useControlledFlagState(
        defaultOpen,
        open,
        onOpenChange,
    );

    // root component reference
    const rootRef = useRef<HTMLElement>(null);
    useInternalRef(ref, rootRef);

    // main panel close on outer click
    useOuterClick(
        rootRef as RefObject<HTMLElement>,
        setClose,
        true,
        triggerRef as MutableRefObject<HTMLElement>,
    );

    return {
        rootRef,
        inputRef: triggerRef,

        reallyOpen,
        toggleOpen,
        setClose,

        dropdownProps: {
            ref: dropdownRef,
            style: styles.popper,
            ...attributes.popper,
        },
        arrowProps: {
            ref: setArrowRef as any, // todo: tighten
            style: styles.arrow,
        },
        restProps,
    };
};
