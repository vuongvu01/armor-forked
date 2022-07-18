import { useCallback, useEffect, useRef, useState } from 'react';
import {
    useControlledState,
    useDerivedState,
    useOuterClick,
    useOverlay,
    usePopper,
    useRootRef,
    useDetectEscapeKeyPressed,
} from '@deliveryhero/armor-system';

import { ClearButtonPropsType } from '../../ClearButton';
import {
    useOnValueUpdate,
    useOptions,
    useSelectedValueToDisplay,
    useValue,
} from '../../../utils/dropdown';

import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
    DropdownPropsType,
    DropdownValueType,
} from '../type';
import { PseudoEventType, RefType } from '../../../type';
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
        large,

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
        maxDropdownWidth,
        minDropdownWidth,
        maxDropdownHeight,
        ...restProps
    }: DropdownPropsType,
    ref: RefType<E>,
) => {
    const internalInputRef = useRootRef<E>(ref);
    const containerRef = useRef(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [initialSelection, setInitialSelection] =
        useState<DropdownInternalValueType>([]);

    const [internalValue, setInternalValue] = useValue(value, defaultValue);
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const [internalGroups, setInternalGroups] =
        useState<InternalItemGroupObjectType>({});

    const { internalOptions, isFlat } = useOptions(options, formatOption);

    const [dynamicInternalOptions, setDynamicInternalOptions] =
        useDerivedState<DropdownInternalOptionType>(
            () => internalOptions,
            [internalOptions],
        );

    const [isOptionListShown, setIsOptionListShown] = useControlledState(
        isListExpanded !== undefined ? isListExpanded : defaultOpen,
        open,
        onOpenChange,
    );

    useEffect(() => {
        if (enableFooter) {
            setInitialSelection(internalValue);
        }
    }, [enableFooter, internalValue]);

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
    }, [setInternalValue, initialSelection, enableFooter, onCancelClick]);

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

    const focusOnActionItemTrigger = useCallback(() => {
        const { current: node } = internalInputRef;

        if (!isOptionListShown) {
            node?.focus();
            return;
        }

        blurInput();
    }, [blurInput, internalInputRef, isOptionListShown]);

    const onOuterClick = useCallback(() => {
        setIsOptionListShown(false);
    }, [setIsOptionListShown]);

    useOuterClick(
        [containerRef, dropdownRef],
        onOuterClick,
        isOptionListShown && !enableFooter,
    );

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
    }, [
        disabled,
        setIsOptionListShown,
        isOptionListShown,
        focusOnActionItemTrigger,
    ]);

    const { panelProps, arrowProps } = usePopper(dropdownRef, containerRef, {
        align: 'bottom-start',
        offset: [0, 5],
        allowedAutoPlacements: ['top', 'bottom'],
    });

    const { zIndex: realZIndex } = useOverlay(isOptionListShown, { zIndex });

    usePanelWidth(containerRef, dropdownRef, isOptionListShown);

    const onChangeProxy = useCallback(
        (newValue: PseudoEventType<DropdownValueType>) => {
            onChange?.({
                ...newValue,
                target: {
                    ...newValue.target,
                    name,
                },
            });
        },
        [onChange, name],
    );

    const onClearMultiple = useCallback(() => {
        if (multiple && internalValue.length > 0) {
            setInternalValue([]);
        }
    }, [internalValue.length, multiple, setInternalValue]);

    const onContainerClick = (event: React.SyntheticEvent<Element>) => {
        const element = event.target as Element;

        if (element.classList.contains('TextInput-InnerContainer')) {
            onOptionListVisibilityTriggerClick();
        }
    };

    return {
        rootProps: restProps,
        containerProps: {
            ref: containerRef,
            disabled,
            onClick: onContainerClick,
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
            large,
        },
        portalProps: {
            enablePortal,
        },
        listContainerProps: {
            ref: dropdownRef,
            zIndex: realZIndex,
            maxWidth: maxDropdownWidth,
            minWidth: minDropdownWidth,
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
            onChange: onChangeProxy,
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
            maxDropdownHeight,
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
            onChange: onChangeProxy,
            options,
            isFlat,
            tagLabelMaxLength,
            openTagsCount,
            renderAggregatedTagsLabel,
            singleLine,
        },
        clearButtonProps: {
            iconSize: 'medium',
            onClick: onClearMultiple,
        } as ClearButtonPropsType,

        disabled,
        multiple,
        onRenderSelectedValue,
        internalValue,
        open: isOptionListShown,
    };
};
