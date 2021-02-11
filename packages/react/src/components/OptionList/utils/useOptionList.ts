import { useCallback, useEffect, useMemo, useState } from 'react';

import { OptionListPropsType, OptionObjectType } from '../type';
import { CheckedIconType } from '../../Checkbox/type';
import { OPTION_LIST_ITEM } from '../constants';
import { useOnToggleAll } from '../../Dropdown/utils';
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
    enableSelectAllOption,
    selectAllLabel = 'Select all',
    enableSearchOption,
    searchPlaceholder = 'Search',
    defaultSearchQuery = '',
    isFlat,
    ...restProps
}: OptionListPropsType) => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);

    const onSearchChange = useOnSearchQueryChange(
        internalValue,
        internalOptions,
        setInternalValue,
        setInternalOptions,
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

    useEffect(() => onSearchChange(), []);

    const handleToggleAll = () => onToggleAll();

    const handleSearchChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newSearchQuery = event.target.value || '';

            setSearchQuery(newSearchQuery);
            onSearchChange(newSearchQuery);
        },
        [setSearchQuery, setSearchQuery],
    );

    const selectAllCheckedIcon: CheckedIconType =
        internalOptions.length === internalValue.length ? 'tick' : 'dash';

    return {
        rootProps: restProps,
        dropdownOptionItemProps: (item: OptionObjectType) => ({
            'data-testid': OPTION_LIST_ITEM,
            isSelected: internalValue.includes(item.value),
            item,
            key: item.value,
            onOptionSelect,
            multiple,
        }),
        selectAllItemProps: {
            item: useMemo(() => ({ value: -1, label: selectAllLabel }), [
                selectAllLabel,
            ]),
            checkedIcon: selectAllCheckedIcon,
            isSelected: internalValue.length > 0,
            onOptionSelect: handleToggleAll,
            multiple,
        },
        dropdownOptionListSearchProps: {
            placeholder: searchPlaceholder,
            onChange: handleSearchChange,
            defaultQuery: searchQuery,
        },
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
    };
};
