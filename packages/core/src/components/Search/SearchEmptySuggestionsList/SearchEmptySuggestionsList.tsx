import React, { FunctionComponent } from 'react';

import { SearchEmptySuggestionsEmptyItemLabelTypography } from '../SearchSuggestionItem/style';
import { useSearchEmptySuggestionsListClassName } from './hooks';
import { SearchEmptySuggestionsListPropsType } from './type';
import { SEARCH_EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX } from './constants';
import {
    SearchEmptySuggestionsItemLabel,
    SearchEmptySuggestionsListRoot,
} from './style';

export const SearchEmptySuggestionsList: FunctionComponent<
    SearchEmptySuggestionsListPropsType
> = ({ noResultsLabel = 'No results found', className }) => {
    const classOverride = useSearchEmptySuggestionsListClassName(
        SEARCH_EMPTY_SUGGESTIONS_LIST_CLASS_PREFIX,
        className,
    );

    return (
        <SearchEmptySuggestionsListRoot className={classOverride.Root}>
            <SearchEmptySuggestionsItemLabel
                className={classOverride.ItemLabel}
            >
                <SearchEmptySuggestionsEmptyItemLabelTypography
                    className={classOverride.ItemLabelTypography}
                    paragraph
                    medium
                >
                    {noResultsLabel}
                </SearchEmptySuggestionsEmptyItemLabelTypography>
            </SearchEmptySuggestionsItemLabel>
        </SearchEmptySuggestionsListRoot>
    );
};
