import { useCallback } from 'react';
import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../../Dropdown/type';
import { DropdownOnSearchQueryChangeType } from '../type';

export const useOnSearchQueryChange = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    setInternalValue: (nextValue: DropdownInternalValueType) => void,
    setInternalOptions: (nextOptions: DropdownInternalOptionType) => void,
    defaultSearchQuery?: string,
    enableSearchOption?: boolean,
) =>
    useCallback<DropdownOnSearchQueryChangeType>(
        (searchQuery = defaultSearchQuery) => {
            if (!enableSearchOption) {
                return () => {};
            }
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
        [setInternalValue, internalOptions, internalValue, defaultSearchQuery],
    );
