import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
    OptionListGroupObjectIndexType,
    OptionListPropsType,
    OptionObjectType,
} from '../type';
import { CheckedIconType } from '../../Checkbox/type';
import { OPTION_LIST_ITEM } from '../constants';
import { useOnToggleAll } from '../../Dropdown/hooks';
import { useOnSearchQueryChange } from './useOnSearchQueryChange';

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
    dynamicInternalOptions = internalOptions,
    setInternalOptions,
    setSearch,
    enableSelectAllOption,
    selectAllLabel = 'Select all',
    enableSearchOption,
    searchPlaceholder = 'Search',
    defaultSearchQuery = '',
    isFlat,
    groups,
    ...restProps
}: OptionListPropsType) => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);

    useEffect(() => {
        if (setSearch) {
            setSearch(searchQuery);
        }
    }, [searchQuery, setSearch]);

    const onSearchChange = useOnSearchQueryChange(
        internalValue,
        internalOptions,
        setInternalValue,
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

    useEffect(() => onSearchChange(), [searchQuery]);

    const handleToggleAll = () => onToggleAll();

    const handleSearchChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newSearchQuery = event.target.value || '';

            setSearchQuery(newSearchQuery);
        },
        [setSearchQuery, setSearchQuery],
    );

    const selectAllCheckedIcon: CheckedIconType =
        internalOptions.length === internalValue.length ? 'tick' : 'dash';

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
        internalOptions,
        dynamicInternalOptions,
        disabled,
        internalValue,
        multiple,
        enableSelectAllOption,
        enableSearchOption,
        searchQuery,
        isOptionListHeaderRendered: enableSelectAllOption || enableSearchOption,
        isSelectAllOptionRendered:
            enableSelectAllOption && multiple && !searchQuery,
        groupIndex,
    };
};
