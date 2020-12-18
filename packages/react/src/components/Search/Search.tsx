import React, { forwardRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { useComponentTheme } from '../../utils/hooks';
import { useSearchClassName } from './utils';
import { SearchPropsType } from './type';
import { searchTheme } from './theme';
import { SEARCH_CLASS_PREFIX, searchRoot } from './constants';
import {
    SearchRoot,
    SearchSuggestionsContainer,
    SearchSuggestionsListContainer,
    SearchTextInput,
} from './style';
import { useSearchBar } from './utils/useSearchBar';
import { SearchSuggestionsList } from './SearchSuggestionsList';
import { SearchIcon } from './SearchIcon';
import { SearchClearAction } from './SearchClearAction';
import { getScalarPropType } from '../../utils/propTypes';

export const Search: FunctionComponent<SearchPropsType> = forwardRef(
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
        } = useSearchBar(restProps, ref);

        const classOverride = useSearchClassName(
            SEARCH_CLASS_PREFIX,
            className,
            disabled,
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

Search.defaultProps = {
    defaultQuery: '',
    placeholder: 'Search',
    disabled: false,
    disableClearAction: false,
    icon: null,
    isLoading: false,
    enableSuggestions: true,
    suggestionListHeight: '400px',
};

Search.propTypes = {
    onClose: PropTypes.func,
    defaultQuery: PropTypes.string,
    disabled: PropTypes.bool,
    disableClearAction: PropTypes.bool,
    additionalInfo: PropTypes.element,
    icon: PropTypes.element,
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
};
