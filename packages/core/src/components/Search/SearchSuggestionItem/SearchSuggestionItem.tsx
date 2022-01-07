import React, { FunctionComponent } from 'react';

import { useSearchSuggestionItemClassName } from './hooks';
import { SearchSuggestionItemPropsType } from './type';
import { SuggestionObjectType } from '../type';
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

export const SearchSuggestionItem: FunctionComponent<
    SearchSuggestionItemPropsType
> = ({
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
    cursorPosition,
    searchQuery,
    theme,
}) => {
    const classOverride = useSearchSuggestionItemClassName(
        SEARCH_CLASS_PREFIX,
        className,
        cursorPosition === suggestionIndex,
    );

    const handleOnClick =
        (selectedOption: SuggestionObjectType) =>
        (event: React.MouseEvent<HTMLDivElement>) => {
            handleSuggestionClick?.(event, selectedOption);
        };

    return (
        <SearchSuggestionItemRoot
            className={classOverride.SuggestionsItem}
            theme={theme}
        >
            <SearchSuggestionItemContainer
                isHighlighted={cursorPosition === suggestionIndex}
                className={classOverride.SuggestionItemContainer}
                theme={theme}
            >
                {!!(icon || renderItemIcon) && (
                    <SearchSuggestionsItemIcon
                        icon={icon}
                        renderItemIcon={renderItemIcon}
                        className={classOverride.SuggestionsItemIcon}
                        theme={theme}
                    >
                        {(renderItemIcon &&
                            renderItemIcon(option, optionIndex)) ||
                            icon}
                    </SearchSuggestionsItemIcon>
                )}
                <SearchSuggestionsItemLabel
                    renderItemAdditionalInfo={renderItemAdditionalInfo}
                    onClick={handleOnClick(option)}
                    className={classOverride.SuggestionsItemLabel}
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
