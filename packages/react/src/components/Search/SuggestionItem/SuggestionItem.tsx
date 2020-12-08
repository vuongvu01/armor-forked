import React, { FunctionComponent } from 'react';

import {
    SearchLabelTypography,
    SearchSuggestionsItem,
    SearchSuggestionsItemAction,
    SearchSuggestionsItemIcon,
    SearchSuggestionsItemLabel,
} from '../style';
import { useSuggestionItemClassName } from './utils';
import { SuggestionItemPropsType } from './type';
import { highlightMatch } from '../utils';
import { SEARCH_CLASS_PREFIX } from '../constants';

export const SuggestionItem: FunctionComponent<SuggestionItemPropsType> = ({
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
    const classOverride = useSuggestionItemClassName(
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
        <SearchSuggestionsItem
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
                <SearchLabelTypography paragraph medium theme={theme}>
                    {highlightMatch(label, searchQuery)}
                </SearchLabelTypography>
            </SearchSuggestionsItemLabel>
            <SearchSuggestionsItemAction
                className={classOverride.SuggestionsItemAction}
                theme={theme}
            >
                {additionalInfo}
            </SearchSuggestionsItemAction>
        </SearchSuggestionsItem>
    );
};
