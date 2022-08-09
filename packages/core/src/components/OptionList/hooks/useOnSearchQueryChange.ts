import { useCallback } from 'react';
import { stripHTMLTagsMemoized as stripHTMLTags } from '@deliveryhero/armor-system';

import { DropdownInternalOptionType } from '../../Dropdown/type';
import { OptionObjectType, DropdownOnSearchQueryChangeType } from '../type';

const checkMatchQuery = (query: string) => (option: OptionObjectType) => {
    const label = stripHTMLTags(option.label).toLowerCase();
    const value = `${option.value}`.toLowerCase();
    return label.includes(query) || value.includes(query);
};

export const useOnSearchQueryChange = (
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
                setInternalOptions?.(internalOptions);
                return () => {};
            }

            const query = searchQuery.toLowerCase();
            setSearchQuery?.(query);

            const matchingOptions = internalOptions.filter(
                checkMatchQuery(query),
            );

            setInternalOptions?.(matchingOptions);
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
