import { useCallback, useRef } from 'react';
import { DropdownInternalOptionType, DropdownPropsType } from '../type';
import {
    useDetectEscapeKeyPressed,
    useInternalRef,
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../utils';
import { ReferenceType } from '../../../type';
import { useControlledState } from '../../../system/hooks/useControlledState';
import { useGuidedState } from '../../../system/hooks/useGuidedState';
import { useOnOptionListUpdate } from './useOnOptionListUpdate';
import { usePopper } from '../../../system/hooks/usePopper';
import { useOverlay } from '../../../system/hooks/useOverlay';
import { useOuterClick } from '../../../system/hooks/useOuterClick';
import { usePanelWidth } from './usePanelWidth';

export const useDropdown = (
    {
        disabled,
        isActionSeparatorDisplayed = true,
        error,
        label,
        onSelect,
        onRenderSelectedValue,
        options,
        onChange,
        multiple = false,
        formatOption,
        enableSelectAllOption,
        selectAllLabel,
        enableSearchOption,
        searchPlaceholder,
        defaultSearchQuery,
        tagLabelMaxLength,
        openTagsCount = 0,
        renderAggregatedTagsLabel,
        singleLine,
        zIndex,
        enablePortal,
        groups,

        // open/close state
        open,
        defaultOpen,
        onOpenChange,
        isListExpanded,

        // other native text input props
        autoFocus,
        defaultValue,
        name,
        placeholder,
        value,
        tabIndex,

        ...restProps
    }: DropdownPropsType,
    ref: ReferenceType,
) => {
    const internalInputRef = useRef(null);
    const containerRef = useRef(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useInternalRef(ref, internalInputRef);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);

    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const [dynamicInternalOptions, setDynamicInternalOptions] = useGuidedState<
        DropdownInternalOptionType
    >(() => internalOptions, [internalOptions]);

    useOnOptionListUpdate(
        internalOptions,
        dynamicInternalOptions,
        setInternalValue,
    );

    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onSelect,
        onChange,
        name,
    );

    const selectedValueToDisplay = useSelectedValueToDisplay(
        internalValue,
        internalOptions,
        onRenderSelectedValue,
    );

    const [isOptionListShown, setIsOptionListShown] = useControlledState(
        isListExpanded !== undefined ? isListExpanded : defaultOpen,
        open,
        onOpenChange,
    );

    const blurInput = useCallback(() => {
        const node = internalInputRef.current as any;

        if (node && node.blur) {
            setTimeout(() => node.blur(), 0);
        }
    }, [internalInputRef]);

    const focusOnActionItemTrigger = () => {
        const node = internalInputRef.current as any;

        if (!isOptionListShown) {
            if (node && node.focus) {
                node.focus();
            }
        } else {
            blurInput();
        }
    };

    const onOuterClick = useCallback(() => {
        setIsOptionListShown(false);
    }, [setIsOptionListShown]);
    useOuterClick([containerRef, dropdownRef], onOuterClick, isOptionListShown);

    useDetectEscapeKeyPressed(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    const onOptionListVisibilityTriggerClick = useCallback(() => {
        if (disabled) {
            return;
        }

        setIsOptionListShown(!isOptionListShown);

        focusOnActionItemTrigger();
    }, [setIsOptionListShown, isOptionListShown, disabled]);

    const { panelProps, arrowProps } = usePopper(
        dropdownRef,
        containerRef,
        'bottom-start',
        {
            offset: [0, 5],
            allowedAutoPlacements: ['top', 'bottom'],
        },
    );

    const { zIndex: realZIndex } = useOverlay(isOptionListShown, { zIndex });

    usePanelWidth(containerRef, dropdownRef);

    return {
        rootProps: restProps,
        containerProps: {
            ref: containerRef,
        },
        textInputProps: {
            onClick: onOptionListVisibilityTriggerClick,
            ref: internalInputRef,
            value: selectedValueToDisplay,
            internalValue,
            disabled,
            error,
            label,
            name,
            displayMode: 'block',
            isCustomRenderer: !!onRenderSelectedValue,

            // other native props
            autoComplete: 'off',
            readOnly: true,
            autoFocus,
            placeholder,
            tabIndex,
            multiple,
        },
        portalProps: {
            enablePortal,
        },
        listContainerProps: {
            ref: dropdownRef,
            zIndex: realZIndex,
            ...panelProps,
        },
        optionListProps: {
            disabled,
            options,
            multiple,
            internalValue,
            blurInput,
            isOptionListShown,
            setInternalValue,
            setIsOptionListShown,
            onValueUpdate,
            onChange,
            isFlat,
            internalOptions,
            dynamicInternalOptions,
            setInternalOptions: setDynamicInternalOptions,
            enableSelectAllOption,
            selectAllLabel,
            enableSearchOption,
            searchPlaceholder,
            defaultSearchQuery,
            enableAbsolutePositioning: false,
            groups,
        },
        arrowProps,
        dropdownExpansionIndicatorProps: {
            disabled,
            error,
            multiple,
            displaySeparator:
                !multiple &&
                isActionSeparatorDisplayed &&
                (isOptionListShown || !!internalValue.length),
            isExpanded: isOptionListShown,
            onClick: onOptionListVisibilityTriggerClick,
        },
        dropdownBeforeSectionProps: {
            disabled,
            onClick: onOptionListVisibilityTriggerClick,
            internalValue,
            internalOptions,
            multiple,
            onRenderSelectedValue,
            setInternalValue,
            onSelect,
            onChange,
            options,
            isFlat,
            tagLabelMaxLength,
            openTagsCount,
            renderAggregatedTagsLabel,
            singleLine,
        },

        disabled,
        multiple,
        onRenderSelectedValue,
        internalValue,
        open: isOptionListShown,
    };
};
