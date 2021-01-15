import React, { FunctionComponent } from 'react';

import {
    SearchSuggestionItemLabelTypography,
    SearchSuggestionsItemAction,
    SearchSuggestionsItemIcon,
    SearchSuggestionsItemLabel,
} from '../SearchSuggestionItem/style';
import { useSearchEmptySuggestionsListClassName } from './utils';
import { SearchEmptySuggestionsListPropsType } from './type';
import { SEARCH_EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX } from './constants';
import { SearchEmptySuggestionsListRoot } from './style';

export const SearchEmptySuggestionsList: FunctionComponent<SearchEmptySuggestionsListPropsType> = ({
    className,
    theme,
}) => {
    const classOverride = useSearchEmptySuggestionsListClassName(
        SEARCH_EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX,
        className,
    );

    return (
        <SearchEmptySuggestionsListRoot
            className={classOverride.Root}
            theme={theme}
        >
            <SearchSuggestionsItemIcon
                className={classOverride.ItemIcon}
                theme={theme}
            >
                {null}
            </SearchSuggestionsItemIcon>
            <SearchSuggestionsItemLabel
                className={classOverride.ItemLabel}
                theme={theme}
            >
                <SearchSuggestionItemLabelTypography
                    className={classOverride.ItemLabelTypography}
                    paragraph
                    medium
                    theme={theme}
                >
                    No results found
                </SearchSuggestionItemLabelTypography>
            </SearchSuggestionsItemLabel>
            <SearchSuggestionsItemAction
                className={classOverride.ItemAction}
                theme={theme}
            >
                {null}
            </SearchSuggestionsItemAction>
        </SearchEmptySuggestionsListRoot>
    );
};
