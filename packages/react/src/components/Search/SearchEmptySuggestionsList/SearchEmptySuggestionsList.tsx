import React, { FunctionComponent } from 'react';

import { SearchEmptySuggestionsEmptyItemLabelTypography } from '../SearchSuggestionItem/style';
import { useSearchEmptySuggestionsListClassName } from './utils';
import { SearchEmptySuggestionsListPropsType } from './type';
import { SEARCH_EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX } from './constants';
import {
    SearchEmptySuggestionsItemLabel,
    SearchEmptySuggestionsListRoot,
} from './style';

export const SearchEmptySuggestionsList: FunctionComponent<SearchEmptySuggestionsListPropsType> = ({
    noResultsLabel = 'No results found',
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
            <SearchEmptySuggestionsItemLabel
                className={classOverride.ItemLabel}
                theme={theme}
            >
                <SearchEmptySuggestionsEmptyItemLabelTypography
                    className={classOverride.ItemLabelTypography}
                    paragraph
                    medium
                    theme={theme}
                >
                    {noResultsLabel}
                </SearchEmptySuggestionsEmptyItemLabelTypography>
            </SearchEmptySuggestionsItemLabel>
        </SearchEmptySuggestionsListRoot>
    );
};
