import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useSearchClassName } from './hooks/useSearchClassName';
import { SearchPropsType } from './type';
import { searchTheme } from './theme';
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
import { getScalarPropType } from '../../utils/propTypes';

export const Search = forwardRef<HTMLInputElement, SearchPropsType>(
    function Search({ className, ...restProps }, ref) {
        const theme = useComponentTheme(SEARCH_CLASS_PREFIX, searchTheme);

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
                theme={theme}
                disabled={disabled}
            >
                <SearchTextInput
                    {...textInputProps}
                    before={<SearchIcon {...searchIconProps} />}
                    after={<SearchClearAction {...searchClearActionProps} />}
                    className={classOverride.TextInput}
                    theme={theme}
                />
                {isSuggestionsListShown ? (
                    <SearchSuggestionsContainer
                        {...suggestionsContainerProps}
                        className={classOverride.SuggestionsContainer}
                        theme={theme}
                    >
                        <SearchSuggestionsListContainer
                            {...suggestionListContainerProps}
                            className={classOverride.SearchSuggestionsList}
                            theme={theme}
                        >
                            <SearchSuggestionsList
                                {...suggestionListProps}
                                theme={theme}
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
            value: getScalarPropType().isRequired,
            label: PropTypes.string.isRequired,
            // groupId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }).isRequired,
    ),
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            id: getScalarPropType().isRequired,
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
