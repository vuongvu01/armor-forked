import {
    useOuterClick,
    useOverlay,
    useControlledFlagState,
    useRootRef,
} from '@deliveryhero/armor-system';

import { useDatePickerPopper } from './useDatePickerPopper';
import { RefType } from '../../../type';
import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
} from '../type';

export const useDatePickerPanel = <V, E extends HTMLDivElement>(
    {
        open,
        defaultOpen,
        onOpenChange,
        zIndex,
        enablePortal,
        ...restProps
    }: DatePickerEffectiveGenericPropsType<V> &
        DatePickerEffectiveCommonPropsType,
    ref: RefType<E>,
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

    const rootRef = useRootRef<E>(ref);

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
