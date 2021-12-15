import { useCallback } from 'react';
import {
    useOuterClick,
    useOverlay,
    useControlledFlagState,
    useRootRef,
    eventBus,
} from '@deliveryhero/armor-system';
import { useCommonDatePickerPopper } from './useCommonDatePickerPopper';
import { RefType } from '../../../type';
import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
} from '../type';
import { DATE_RANGE_PICKER_CLOSE_PANEL } from '../DateRangePicker/constants';

type UseCommonDatePickerPanelPropsType<E> = {
    ref: RefType<E>;
};

export const useCommonDatePickerPanel = <V, E extends HTMLDivElement>(
    { ref }: UseCommonDatePickerPanelPropsType<E>,
    {
        open,
        defaultOpen,
        onOpenChange,
        zIndex,
        enablePortal,
    }: DatePickerEffectiveGenericPropsType<V> &
        DatePickerEffectiveCommonPropsType,
) => {
    const {
        dropdownRef,
        triggerRef,
        dropdownProps,
        arrowProps,
    } = useCommonDatePickerPopper();

    // main panel open/close
    const [
        dropdownOpen,
        ,
        ,
        closeDropdown,
        toggleDropdown,
    ] = useControlledFlagState(defaultOpen, open, onOpenChange);

    const { zIndex: realZIndex, id: panelId } = useOverlay(dropdownOpen, {
        zIndex,
    });

    const onReallyDropdownClose = useCallback(() => {
        eventBus.dispatch(DATE_RANGE_PICKER_CLOSE_PANEL, {
            id: panelId,
        });
        closeDropdown();
    }, [closeDropdown, panelId]);

    const rootRef = useRootRef<E>(ref);

    // main panel close on outer click
    useOuterClick([rootRef, dropdownRef], onReallyDropdownClose, dropdownOpen);

    return {
        rootRef,
        inputRef: triggerRef,
        dropdownOpen: !!dropdownOpen,
        toggleDropdown,
        closeDropdown: onReallyDropdownClose,
        portalProps: {
            enablePortal,
        },
        dropdownProps: {
            ...dropdownProps,
            zIndex: realZIndex,
        },
        arrowProps,
        panelId,
    };
};
