import { useCallback, useMemo, useRef, useState } from 'react';
import { DropdownInternalOptionType, DropdownPropsType } from '../type';
import {
    noop,
    useDetectClickOutsideComponent,
    useDetectEscapeKeyPressed,
    useInternalRef,
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../utils';
import { ReferenceType } from '../../../type';
import { useControlledState } from '../../../system/hooks/useControlledState';

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

        // open/close state
        open,
        defaultOpen,
        onOpenChange,
        isListExpanded = false,

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

    useInternalRef(ref, internalInputRef);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);

    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const [dynamicInternalOptions, setDynamicInternalOptions] = useState<
        DropdownInternalOptionType
    >(internalOptions);

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

    useDetectClickOutsideComponent(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    useDetectEscapeKeyPressed(
        containerRef,
        setIsOptionListShown,
        isOptionListShown,
    );

    const handleDisplayOptionListToggle = useCallback(() => {
        setIsOptionListShown(!isOptionListShown);

        focusOnActionItemTrigger();
    }, [setIsOptionListShown, isOptionListShown]);

    const handleExpansionClick = useMemo(
        () => (disabled ? noop : handleDisplayOptionListToggle),
        [disabled, isOptionListShown],
    );

    return {
        rootProps: restProps,
        containerProps: {
            ref: containerRef,
        },
        textInputProps: {
            onClick: handleExpansionClick,
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
            ref: internalInputRef,
            enableSelectAllOption,
            selectAllLabel,
            enableSearchOption,
            searchPlaceholder,
            defaultSearchQuery,
        },
        dropdownExpansionIndicatorProps: {
            disabled,
            error,
            multiple,
            displaySeparator:
                !multiple &&
                isActionSeparatorDisplayed &&
                (isOptionListShown || !!internalValue.length),
            isExpanded: isOptionListShown,
            onClick: handleExpansionClick,
        },
        dropdownBeforeSectionProps: {
            disabled,
            onClick: handleExpansionClick,
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
    };
};
