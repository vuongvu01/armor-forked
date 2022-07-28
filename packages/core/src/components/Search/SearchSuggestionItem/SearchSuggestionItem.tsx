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
    React.PropsWithChildren<SearchSuggestionItemPropsType>
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
        <SearchSuggestionItemRoot className={classOverride.SuggestionsItem}>
            <SearchSuggestionItemContainer
                isHighlighted={cursorPosition === suggestionIndex}
                className={classOverride.SuggestionItemContainer}
            >
                {!!(icon || renderItemIcon) && (
                    <SearchSuggestionsItemIcon
                        icon={icon}
                        renderItemIcon={renderItemIcon}
                        className={classOverride.SuggestionsItemIcon}
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
                >
                    <SearchSuggestionItemLabelTypography
                        className={classOverride.LabelTypography}
                        paragraph
                        medium
                    >
                        {highlightMatch(option.label, searchQuery)}
                    </SearchSuggestionItemLabelTypography>
                </SearchSuggestionsItemLabel>
                {(renderItemAdditionalInfo || additionalInfo) && (
                    <SearchSuggestionsItemAction
                        renderItemAdditionalInfo={renderItemAdditionalInfo}
                        className={classOverride.SuggestionsItemAction}
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
