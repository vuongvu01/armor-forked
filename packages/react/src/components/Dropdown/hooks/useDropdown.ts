import { useCallback, useEffect, useRef, useState } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownPropsType,
} from '../type';
import {
    useDetectEscapeKeyPressed,
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../utils';
import { RefType } from '../../../type';
import {
    useControlledState,
    useDerivedState,
    useOuterClick,
    useOverlay,
    usePopper,
    useRootRef,
} from '../../../system';
import { useOnOptionListUpdate } from './useOnOptionListUpdate';
import { usePanelWidth } from './usePanelWidth';
import { MAX_OPTIONS_SELECT_ALL_THRESHOLD } from '../../OptionList/constants';
import { InternalItemGroupObjectType } from '../../OptionList/type';
import { useOnInternalItemGroupsUpdate } from './useOnInternalItemGroupsUpdate';

export const useDropdown = <E extends HTMLInputElement>(
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
        enableOptionContentEllipsis,
        enableFooter,
        preserveSelection,
        onCancelClick,
        onConfirmClick,
        footerContent,
        searchPlaceholder,
        defaultSearchQuery,
        tagLabelMaxLength,
        enableVirtualization,
        openTagsCount = enableVirtualization ? 20 : 10,
        renderAggregatedTagsLabel,
        singleLine,
        zIndex,
        enablePortal,
        groups,
        renderItemAdditionalInfo,
        enableGroupSelection,
        'data-testid-input': dataTestIdInput,

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
    ref: RefType<E>,
) => {
    const internalInputRef = useRootRef<E>(ref);
    const containerRef = useRef(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [initialSelection, setInitialSelection] = useState<
        DropdownInternalValueType
    >([]);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const [internalGroups, setInternalGroups] = useState<
        InternalItemGroupObjectType
    >({});

    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const [dynamicInternalOptions, setDynamicInternalOptions] = useDerivedState<
        DropdownInternalOptionType
    >(() => internalOptions, [internalOptions]);

    const [isOptionListShown, setIsOptionListShown] = useControlledState(
        isListExpanded !== undefined ? isListExpanded : defaultOpen,
        open,
        onOpenChange,
    );

    useEffect(() => {
        if (enableFooter) {
            setInitialSelection(internalValue);
        }
    }, [enableFooter]);

    useOnOptionListUpdate(
        internalOptions,
        dynamicInternalOptions,
        setInternalValue,
        searchQuery,
        isOptionListShown,
        preserveSelection,
    );

    const onValueUpdate = useOnValueUpdate(
        setInternalValue,
        onSelect,
        onChange,
        name,
        initialSelection,
    );

    useOnInternalItemGroupsUpdate(
        internalValue,
        internalOptions,
        setInternalGroups,
        groups,
        enableGroupSelection,
    );

    const selectedValueToDisplay = useSelectedValueToDisplay(
        internalValue,
        internalOptions,
        onRenderSelectedValue,
    );

    const handleCancelClick = useCallback(() => {
        setInternalValue(initialSelection);

        if (enableFooter && onCancelClick) {
            onCancelClick(initialSelection);
        }
    }, [enableFooter, onCancelClick, initialSelection]);

    const handleConfirmClick = useCallback(() => {
        setInitialSelection(internalValue);
        if (enableFooter && onConfirmClick) {
            onConfirmClick(internalValue);
        }
    }, [enableFooter, onConfirmClick, internalValue]);

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

    if (!enableFooter) {
        useOuterClick(
            [containerRef, dropdownRef],
            onOuterClick,
            isOptionListShown,
        );
    }

    useDetectEscapeKeyPressed(
        containerRef,
        setIsOptionListShown,
        isOptionListShown && !enableFooter,
    );

    const onOptionListVisibilityTriggerClick = useCallback(() => {
        if (disabled) {
            return;
        }

        setIsOptionListShown(!isOptionListShown);

        focusOnActionItemTrigger();
    }, [setIsOptionListShown, isOptionListShown, disabled]);

    const { panelProps, arrowProps } = usePopper(dropdownRef, containerRef, {
        align: 'bottom-start',
        offset: [0, 5],
        allowedAutoPlacements: ['top', 'bottom'],
    });

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
            'data-testid-input': dataTestIdInput,

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
            enableVirtualization,
            setInternalOptions: setDynamicInternalOptions,
            setSearch: setSearchQuery,
            enableSelectAllOption:
                options && options.length > MAX_OPTIONS_SELECT_ALL_THRESHOLD
                    ? false
                    : enableSelectAllOption,
            selectAllLabel,
            enableSearchOption,
            enableFooter,
            onCancelClick: handleCancelClick,
            onConfirmClick: handleConfirmClick,
            footerContent,
            internalGroups,
            setInternalGroups,
            searchPlaceholder,
            defaultSearchQuery,
            enableAbsolutePositioning: false,
            groups,
            enableGroupSelection,
            enableOptionContentEllipsis,
            renderItemAdditionalInfo,
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
            setInitialSelection,
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
