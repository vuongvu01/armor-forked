import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useSearchClassName } from './hooks/useSearchClassName';
import { SearchPropsType } from './type';
import { SEARCH_CLASS_PREFIX, searchRoot } from './constants';
import {
    SearchRoot,
    SearchSuggestionsContainer,
    SearchSuggestionsListContainer,
    SearchTextInput,
} from './style';
import { useSearch } from './hooks/useSearch';
import { SearchSuggestionsList } from './SearchSuggestionsList';
import { SearchIcon } from './SearchIcon';
import { SearchClearAction } from './SearchClearAction';

/**
 * # Search
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/348c10-search/b/01a238)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { ChangeEvent, useState } from 'react';
 * import { Search } from '@deliveryhero/armor';
 * import { InfoIcon, PinMarkerIcon } from '@deliveryhero/armor-icons';
 *
 * const foodOptions = [
 *     { value: 0, label: 'Biryani' },
 *     { value: 1, label: 'Tacos' },
 *     { value: 2, label: 'Pho' },
 *     { value: 3, label: 'Risotto' },
 *     { value: 4, label: 'Pizza' },
 *     { value: 5, label: 'Enchiladas' },
 * ];
 *
 * const [searchQuery, setSearchQuery] = useState('');
 *
 * const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
 *     const query = event?.target?.value || '';
 *     setSearchQuery(query);
 * };
 *
 * const handleOnSelect = (option: { label: string }) => {
 *     setSearchQuery(option.label);
 * };
 *
 * <Search
 *     additionalInfo={<InfoIcon width="12px" height="12px" />}
 *     onChange={handleOnChange}
 *     onItemSelect={handleOnSelect}
 *     options={searchQuery && searchQuery.length ? foodOptions : []}
 *     icon={<PinMarkerIcon width="12px" height="12px" />}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Search = forwardRef<HTMLInputElement, SearchPropsType>(
    function Search({ className, ...restProps }, ref) {
        const {
            rootProps,
            textInputProps,
            searchIconProps,
            searchClearActionProps,
            suggestionsContainerProps,
            suggestionListContainerProps,
            suggestionListProps,

            disabled,
            isSuggestionsListShown,
        } = useSearch(restProps, ref);

        const classOverride = useSearchClassName(
            SEARCH_CLASS_PREFIX,
            className,
            disabled,
            isSuggestionsListShown,
        );

        return (
            <SearchRoot
                data-testid={searchRoot}
                {...rootProps}
                className={classOverride.Root}
                disabled={disabled}
            >
                <SearchTextInput
                    {...textInputProps}
                    before={<SearchIcon {...searchIconProps} />}
                    after={<SearchClearAction {...searchClearActionProps} />}
                    className={classOverride.TextInput}
                />
                {isSuggestionsListShown ? (
                    <SearchSuggestionsContainer
                        {...suggestionsContainerProps}
                        className={classOverride.SuggestionsContainer}
                    >
                        <SearchSuggestionsListContainer
                            {...suggestionListContainerProps}
                            className={classOverride.SearchSuggestionsList}
                        >
                            <SearchSuggestionsList
                                {...suggestionListProps}
                                groupClassName={classOverride.ListItemGroup}
                            />
                        </SearchSuggestionsListContainer>
                    </SearchSuggestionsContainer>
                ) : null}
            </SearchRoot>
        );
    },
);

Search.propTypes = {
    // onClose: PropTypes.func,
    defaultQuery: PropTypes.string,
    disabled: PropTypes.bool,
    disableClearAction: PropTypes.bool,
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo: PropTypes.element,
    renderItemAdditionalInfo: PropTypes.func,
    /**
     * @deprecated
     * Use renderItemIcon
     */
    icon: PropTypes.element,
    renderItemIcon: PropTypes.func,
    onChange: PropTypes.func,
    onItemSelect: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
            // groupId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }).isRequired,
    ),
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
    placeholder: PropTypes.string,
    enableSuggestions: PropTypes.bool,
    isLoading: PropTypes.bool,
    /**
     * height of the list in in 4px unit increments
     */
    suggestionListHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export const MemoizedSearch = memo(Search);
