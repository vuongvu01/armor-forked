import React, { FunctionComponent } from 'react';

import {
    SearchLabelTypography,
    SearchSuggestionsItemAction,
    SearchSuggestionsItemIcon,
    SearchSuggestionsItemLabel,
} from '../style';
import { useSearchSuggestionItemClassName } from './utils';
import { SearchSuggestionItemPropsType } from './type';
import { highlightMatch } from '../utils';
import { SearchSuggestionItemRoot } from './style';
import { SEARCH_CLASS_PREFIX } from '../constants';

export const SearchSuggestionItem: FunctionComponent<SearchSuggestionItemPropsType> = ({
    className,
    option: { label },
    suggestionIndex,
    handleSuggestionClick,
    additionalInfo,
    icon,
    cursor,
    searchQuery,
    theme,
}) => {
    const classOverride = useSearchSuggestionItemClassName(
        SEARCH_CLASS_PREFIX,
        className,
    );

    const handleOnClick = (index: number) => (
        event: React.MouseEvent<HTMLDivElement>,
    ) => handleSuggestionClick(event, index);

    const getSuggestionItemClass = (index: number) =>
        `${classOverride.SuggestionsItem} ${
            cursor === index ? 'suggestion-focused' : ''
        }`;

    return (
        <SearchSuggestionItemRoot
            className={getSuggestionItemClass(suggestionIndex)}
            isHighlighted={cursor === suggestionIndex}
            key={label}
            theme={theme}
        >
            {!!icon && (
                <SearchSuggestionsItemIcon
                    className={classOverride.SuggestionsItemIcon}
                    icon={icon}
                    theme={theme}
                >
                    {icon}
                </SearchSuggestionsItemIcon>
            )}
            <SearchSuggestionsItemLabel
                className={classOverride.SuggestionsItemLabel}
                onClick={handleOnClick(suggestionIndex)}
                theme={theme}
            >
                <SearchLabelTypography
                    className={classOverride.LabelTypography}
                    paragraph
                    medium
                    theme={theme}
                >
                    {highlightMatch(label, searchQuery)}
                </SearchLabelTypography>
            </SearchSuggestionsItemLabel>
            <SearchSuggestionsItemAction
                paragraph
                medium
                className={classOverride.SuggestionsItemAction}
                theme={theme}
            >
                {additionalInfo}
            </SearchSuggestionsItemAction>
        </SearchSuggestionItemRoot>
    );
};
