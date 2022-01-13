import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useSortedList } from '@deliveryhero/armor-system';

import { SearchEmptySuggestionsList } from '../SearchEmptySuggestionsList';
import { SearchGroupObjectType, SuggestionObjectType } from '../type';
import { SearchSuggestionItem } from '../SearchSuggestionItem';
import { SearchSuggestionsListPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { SearchSuggestionListGroup } from './style';

// TODO (nmelnikov 2020-10-01): tighten types via the existing SuggestionsListPropsType
// @ts-ignore
export const SearchSuggestionsList: FC<SearchSuggestionsListPropsType> = ({
    options,
    groupIndex,
    handleSuggestionClick,
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo,
    renderItemAdditionalInfo,
    /**
     * @deprecated
     * Use renderItemIcon
     */
    icon,
    renderItemIcon,
    cursorPosition,
    searchQuery,
    noResultsLabel,
    theme,
    groupClassName,
}) => {
    const sortedOptions = useSortedList(options ?? [], 'groupId');

    if (!options || !options.length) {
        return (
            <SearchEmptySuggestionsList
                theme={theme}
                noResultsLabel={noResultsLabel}
            />
        );
    }

    const displayedGroups: ObjectLiteralType = {};

    return sortedOptions.map((option: SuggestionObjectType, index: number) => {
        const { label, groupId } = option;
        let group: SearchGroupObjectType | null = null;
        if (
            groupIndex &&
            groupId &&
            groupId in groupIndex &&
            !displayedGroups[groupId]
        ) {
            group = groupIndex[groupId];
            displayedGroups[groupId] = true;
        }

        return (
            <>
                {!!group && (
                    <SearchSuggestionListGroup
                        className={groupClassName}
                        theme={theme}
                        enableSeparator={index > 0}
                    >
                        {group.label}
                    </SearchSuggestionListGroup>
                )}
                <SearchSuggestionItem
                    key={label}
                    option={option}
                    optionIndex={index}
                    suggestionIndex={index}
                    handleSuggestionClick={handleSuggestionClick}
                    additionalInfo={additionalInfo}
                    renderItemAdditionalInfo={renderItemAdditionalInfo}
                    icon={icon}
                    renderItemIcon={renderItemIcon}
                    cursorPosition={cursorPosition}
                    searchQuery={searchQuery}
                    theme={theme}
                />
            </>
        );
    });
};

SearchSuggestionsList.propTypes = {
    handleSuggestionClick: PropTypes.func.isRequired,
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo: PropTypes.element,
    renderItemAdditionalInfo: PropTypes.func,
    icon: PropTypes.element,
    cursorPosition: PropTypes.number,
    searchQuery: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
};