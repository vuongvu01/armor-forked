import { useCallback } from 'react';

import {
    DropdownInternalOptionType,
    DropdownInternalValueType,
} from '../../Dropdown/type';
import { DropdownOnSearchQueryChangeType } from '../type';

export const useOnSearchQueryChange = (
    internalValue: DropdownInternalValueType,
    internalOptions: DropdownInternalOptionType,
    setInternalOptions?: (nextOptions: DropdownInternalOptionType) => void,
    setSearchQuery?: (searchQuery: string) => void,
    defaultSearchQuery?: string,
    enableSearchOption?: boolean,
) =>
    useCallback<DropdownOnSearchQueryChangeType>(
        (searchQuery = defaultSearchQuery) => {
            if (!enableSearchOption) {
                return () => {};
            }
            if (!searchQuery) {
                if (setInternalOptions) {
                    setInternalOptions(internalOptions);
                }
                return () => {};
            }

            const query = searchQuery.toLowerCase();

            if (setSearchQuery) {
                setSearchQuery(query);
            }

            const matchingOptions = internalOptions.filter(option => {
                const label =
                    typeof option.label === 'string'
                        ? option.label.toLowerCase()
                        : option.label;
                return label.toString().indexOf(query) !== -1;
            });

            if (setInternalOptions) {
                setInternalOptions(matchingOptions);
            }
            return () => {};
        },
        [
            defaultSearchQuery,
            enableSearchOption,
            setSearchQuery,
            internalOptions,
            setInternalOptions,
        ],
    );
