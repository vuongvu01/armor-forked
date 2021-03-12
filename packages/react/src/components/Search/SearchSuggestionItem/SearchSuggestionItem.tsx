import React, { FunctionComponent } from 'react';

import { useSearchSuggestionItemClassName } from './utils';
import { SearchSuggestionItemPropsType } from './type';
import { highlightMatch } from '../utils/highlightMatch';
import {
    SearchSuggestionItemLabelTypography,
    SearchSuggestionItemContainer,
    SearchSuggestionItemRoot,
    SearchSuggestionsItemAction,
    SearchSuggestionsItemIcon,
    SearchSuggestionsItemLabel,
} from './style';
import { SEARCH_CLASS_PREFIX } from '../constants';

export const SearchSuggestionItem: FunctionComponent<SearchSuggestionItemPropsType> = ({
    className,
    option,
    optionIndex,
    suggestionIndex,
    handleSuggestionClick,
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo,
    renderItemAdditionalInfo,
    icon,
    /**
     * @deprecated
     * Use renderItemIcon
     */
    renderItemIcon,
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
            theme={theme}
        >
            <SearchSuggestionItemContainer
                className={classOverride.SuggestionItemContainer}
                isHighlighted={cursor === suggestionIndex}
                theme={theme}
            >
                {!!(icon || renderItemIcon) && (
                    <SearchSuggestionsItemIcon
                        className={classOverride.SuggestionsItemIcon}
                        icon={icon}
                        renderItemIcon={renderItemIcon}
                        theme={theme}
                    >
                        {(renderItemIcon &&
                            renderItemIcon(option, optionIndex)) ||
                            icon}
                    </SearchSuggestionsItemIcon>
                )}
                <SearchSuggestionsItemLabel
                    renderItemAdditionalInfo={renderItemAdditionalInfo}
                    className={classOverride.SuggestionsItemLabel}
                    onClick={handleOnClick(suggestionIndex)}
                    theme={theme}
                >
                    <SearchSuggestionItemLabelTypography
                        className={classOverride.LabelTypography}
                        paragraph
                        medium
                        theme={theme}
                    >
                        {highlightMatch(option.label, searchQuery)}
                    </SearchSuggestionItemLabelTypography>
                </SearchSuggestionsItemLabel>
                {(renderItemAdditionalInfo || additionalInfo) && (
                    <SearchSuggestionsItemAction
                        renderItemAdditionalInfo={renderItemAdditionalInfo}
                        className={classOverride.SuggestionsItemAction}
                        theme={theme}
                    >
                        {(renderItemAdditionalInfo &&
                            renderItemAdditionalInfo(option)) ||
                            additionalInfo}
                    </SearchSuggestionsItemAction>
                )}
            </SearchSuggestionItemContainer>
        </SearchSuggestionItemRoot>
    );
};
