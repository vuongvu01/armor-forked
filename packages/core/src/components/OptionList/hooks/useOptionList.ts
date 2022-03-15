import React, {
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {
    useVirtualization,
    ScalarType,
    useScrollToNode,
    useNavigationControl,
    getWindow,
} from '@deliveryhero/armor-system';

import {
    InternalItemGroupObjectTypeInternal,
    OptionListGroupObjectIndexType,
    OptionListGroupObjectType,
    OptionListPropsType,
    OptionObjectType,
} from '../type';
import { useShowGradientEffectOnScroll } from './useShowGradientEffectOnScroll';
import { CheckedIconType } from '../../Checkbox/type';
import {
    OPTION_LIST_ITEM,
    INITIAL_CURSOR_POSITION,
    OPTION_LIST_ITEM_FOCUSED_CLASS,
} from '../constants';
import { useOnToggleAll } from '../../Dropdown/hooks';
import { useOnSearchQueryChange } from './useOnSearchQueryChange';
import { useOnToggleGroup } from '../../Dropdown/hooks/useOnToggleGroup';

export const useOptionList = ({
    disabled,
    options,
    multiple,
    internalValue,
    blurInput,
    setIsOptionListShown,
    onValueUpdate,
    onChange,
    setInternalValue,
    internalOptions,
    internalGroups,
    dynamicInternalOptions = internalOptions,
    setInternalOptions,
    setSearch,
    enableSelectAllOption,
    selectAllLabel = 'Select all',
    enableSearchOption,
    searchPlaceholder = 'Search',
    enableFooter,
    onCancelClick,
    onConfirmClick,
    footerContent,
    defaultSearchQuery = '',
    enableVirtualization = false,
    isFlat,
    groups,
    enableGroupSelection,
    enableOptionContentEllipsis,
    renderItemAdditionalInfo,
    autoFocus,
    enableScrollGradientEffect,
    maxDropdownHeight,
    ...restProps
}: OptionListPropsType) => {
    const [cursorPosition, setCursorPosition] = useState<number>(
        INITIAL_CURSOR_POSITION,
    );
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const listContentRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const isSelectAllOptionRendered =
        enableSelectAllOption && multiple && !searchQuery;

    const {
        data: virtualData,
        bottomOffset: virtualBottomOffset,
        topOffset: virtualTopOffset,
    } = useVirtualization<OptionObjectType, HTMLDivElement>(
        enableVirtualization,
        listRef,
        dynamicInternalOptions,
        {
            itemSelector: '.OptionListItem-Root',
            parentContainerRef: listContentRef as RefObject<HTMLElement>,
        },
    );

    useEffect(() => {
        if (setSearch) {
            setSearch(searchQuery);
        }
    }, [searchQuery, setSearch]);

    const onSearchChange = useOnSearchQueryChange(
        internalValue,
        internalOptions,
        setInternalOptions,
        setSearch,
        searchQuery,
        enableSearchOption,
    );

    // todo: fix me
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const resetListState = () => {
        setSearchQuery('');
        onSearchChange();
    };

    const onOptionSelect = useCallback(
        (item: OptionObjectType) => {
            if (internalOptions) {
                onValueUpdate(
                    internalValue,
                    multiple,
                    item,
                    item.value,
                    options,
                    isFlat,
                );
            }

            if (!multiple) {
                setIsOptionListShown(false);
                resetListState();
            }

            if (blurInput) {
                blurInput();
            }
        },
        [
            internalOptions,
            multiple,
            blurInput,
            onValueUpdate,
            internalValue,
            options,
            isFlat,
            setIsOptionListShown,
            resetListState,
        ],
    );

    const onToggleAll = useOnToggleAll(
        setInternalValue,
        internalOptions,
        internalValue,
        onChange,
    );

    const onToggleGroup = useOnToggleGroup(
        setInternalValue,
        internalOptions,
        internalValue,
        internalGroups,
        onChange,
    );

    useEffect(() => onSearchChange(), [onSearchChange, searchQuery]);

    const handleToggleAll = () => onToggleAll();

    const handleSearchChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newSearchQuery = event.target.value || '';

            setSearchQuery(newSearchQuery);
            setCursorPosition(INITIAL_CURSOR_POSITION);
        },
        [setSearchQuery],
    );

    const handleToggleGroup = useCallback(
        (event: React.MouseEvent<HTMLDivElement>, groupId: ScalarType) => {
            if (!enableGroupSelection) {
                return;
            }

            onToggleGroup(groupId);
        },
        [enableGroupSelection, onToggleGroup],
    );

    const selectAllCheckedIcon: CheckedIconType =
        internalOptions.filter(
            (option) =>
                !option?.disabled ||
                (!!option?.disabled && internalValue.includes(option.value)),
        ).length === internalValue.length
            ? 'tick'
            : 'dash';

    const groupIndex = useMemo<OptionListGroupObjectIndexType>(() => {
        if (!groups || !groups.length) {
            return {};
        }

        return groups.reduce<OptionListGroupObjectIndexType>(
            (result, group) => {
                // eslint-disable-next-line no-param-reassign
                result[group.id] = group;
                return result;
            },
            {},
        );
    }, [groups]);

    const handleCancelButtonClick = () => {
        setIsOptionListShown(false);

        if (onCancelClick) {
            onCancelClick();
        }
    };

    const handleConfirmButtonClick = () => {
        setIsOptionListShown(false);

        if (onConfirmClick) {
            onConfirmClick();
        }
    };

    const selectAllItem = useMemo(
        () => ({ value: -1, label: selectAllLabel }),
        [selectAllLabel],
    );

    const scrollToCurrent = useScrollToNode({
        className: OPTION_LIST_ITEM_FOCUSED_CLASS,
    });

    const handleEnterPress = useCallback(() => {
        const win = getWindow();
        if (!win) {
            return;
        }

        const focusedElement = document.querySelector(
            `.${OPTION_LIST_ITEM_FOCUSED_CLASS}`,
        );
        const selectedLabel = focusedElement?.textContent;

        if (selectedLabel === selectAllLabel) {
            onToggleAll();
        } else if (options?.length && selectedLabel) {
            const selectedOption = (options as OptionObjectType[]).find(
                (option) => option.label === selectedLabel,
            );
            if (selectedOption && !selectedOption.disabled) {
                onOptionSelect(selectedOption);
            }
        }
    }, [selectAllLabel, options, onToggleAll, onOptionSelect]);

    useEffect(() => {
        scrollToCurrent();
    }, [cursorPosition]); // eslint-disable-line react-hooks/exhaustive-deps

    useNavigationControl({
        yLength: isSelectAllOptionRendered
            ? (options?.length || 0) + 1
            : options?.length || 0,
        setCursorY: setCursorPosition,
        targetElement: searchInputRef,
        onEnterKeyPress: handleEnterPress,
    });

    const { isTopGradientEffectShown, isBottomGradientEffectShown } =
        useShowGradientEffectOnScroll(
            !!enableScrollGradientEffect,
            listContentRef,
        );

    return {
        rootProps: restProps,
        getOptionItemProps: (option: OptionObjectType) => ({
            'data-testid': OPTION_LIST_ITEM,
            isSelected: internalValue.includes(option.value),
            item: option,
            key: option.value,
            onOptionSelect,
            multiple,
            enableContentEllipsis: enableOptionContentEllipsis,
            renderItemAdditionalInfo,
            cursorPosition,
        }),
        getSelectAllItemProps: () => ({
            item: selectAllItem,
            checkedIcon: selectAllCheckedIcon,
            isSelected: internalValue.length > 0,
            onOptionSelect: handleToggleAll,
            multiple,
            cursorPosition,
        }),
        getOptionListSearchProps: () => ({
            placeholder: searchPlaceholder,
            onChange: handleSearchChange,
            defaultQuery: searchQuery,
            autoFocus,
            ref: searchInputRef,
        }),
        listContentProps: {
            ref: listContentRef,
        },
        listContainerProps: {
            maxHeight: maxDropdownHeight,
        },
        optionListItemGroupProps: (group: OptionListGroupObjectType) => ({
            multiple,
            enableGroupSelection,
            enableContentEllipsis: enableOptionContentEllipsis,
            onClick: (event: React.MouseEvent<HTMLDivElement>) =>
                handleToggleGroup(event, group.id),
            internalGroup: internalGroups
                ? internalGroups[group.id]
                : ({} as InternalItemGroupObjectTypeInternal),
        }),
        listProps: {
            ref: listRef,
        },

        enableVirtualization,
        getVirtualTopSpaceProps: () => ({ height: virtualTopOffset }),
        getVirtualBottomSpaceProps: () => ({
            height: virtualBottomOffset,
        }),

        internalOptions,
        dynamicInternalOptions:
            enableVirtualization && virtualData && virtualData.length
                ? virtualData
                : dynamicInternalOptions,
        disabled,
        internalValue,
        multiple,
        enableSelectAllOption,
        enableSearchOption,
        isOptionListHeaderRendered: enableSelectAllOption || enableSearchOption,
        isFooterRendered: enableFooter || footerContent,
        optionListFooterProps: {
            footerContent,
            onCancelClick: handleCancelButtonClick,
            onConfirmClick: handleConfirmButtonClick,
        },
        isSelectAllOptionRendered,
        groupIndex,
        getTopGradientProps: () => ({
            isShown: isTopGradientEffectShown,
        }),
        getBottomGradientProps: () => ({
            isShown: isBottomGradientEffectShown,
        }),
    };
};
