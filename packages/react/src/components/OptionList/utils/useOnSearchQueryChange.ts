import { useCallback } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../../Dropdown/type';
import { DropdownOnSearchQueryChangeType } from '../type';

// const findMatches = (query?: string) =>

export const useOnSearchQueryChange = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    setInternalOptions: (nextOptions: DropdownInternalOptionType) => void,
    defaultSearchQuery?: string,
) =>
    useCallback<DropdownOnSearchQueryChangeType>(
        (searchQuery = defaultSearchQuery) => {
            if (!searchQuery) {
                return setInternalOptions(internalOptions);
            }

            const query = searchQuery.toLowerCase();

            const matchingOptions = internalOptions.filter(option => {
                const label =
                    typeof option.label === 'string'
                        ? option.label.toLowerCase()
                        : option.label;
                return label.toString().indexOf(query) !== -1;
            });

            return setInternalOptions(matchingOptions);
        },
        [setInternalValue, internalOptions, internalValue],
    );
