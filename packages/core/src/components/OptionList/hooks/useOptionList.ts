import React, {
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { useVirtualization, ScalarType } from '@deliveryhero/armor-system';

import {
    InternalItemGroupObjectTypeInternal,
    OptionListGroupObjectIndexType,
    OptionListGroupObjectType,
    OptionListPropsType,
    OptionObjectType,
} from '../type';
import { CheckedIconType } from '../../Checkbox/type';
import { OPTION_LIST_ITEM } from '../constants';
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
    ...restProps
}: OptionListPropsType) => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
    const listContainerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

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
            parentContainerRef: listContainerRef as RefObject<HTMLElement>,
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
            onValueUpdate,
            internalValue,
            multiple,
            options,
            isFlat,
            blurInput,
            setSearchQuery,
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

    useEffect(() => onSearchChange(), [searchQuery]);

    const handleToggleAll = () => onToggleAll();

    const handleSearchChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newSearchQuery = event.target.value || '';

            setSearchQuery(newSearchQuery);
        },
        [setSearchQuery, setSearchQuery],
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
            option =>
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
        }),
        getSelectAllItemProps: () => ({
            item: selectAllItem,
            checkedIcon: selectAllCheckedIcon,
            isSelected: internalValue.length > 0,
            onOptionSelect: handleToggleAll,
            multiple,
        }),
        getOptionListSearchProps: () => ({
            placeholder: searchPlaceholder,
            onChange: handleSearchChange,
            defaultQuery: searchQuery,
        }),
        listContainerProps: {
            ref: listContainerRef,
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
        isSelectAllOptionRendered:
            enableSelectAllOption && multiple && !searchQuery,
        groupIndex,
    };
};
