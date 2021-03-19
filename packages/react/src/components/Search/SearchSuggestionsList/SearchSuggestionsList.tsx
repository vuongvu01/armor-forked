import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SearchEmptySuggestionsList } from '../SearchEmptySuggestionsList';
import { SearchGroupObjectType, SuggestionObjectType } from '../type';
import { SearchSuggestionItem } from '../SearchSuggestionItem';
import { SearchSuggestionsListPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { SearchSuggestionListGroup } from './style';

// TODO (nmelnikov 2020-10-01): tighten types via the existing SuggestionsListPropsType
// @ts-ignore
export const SearchSuggestionsList: FunctionComponent<SearchSuggestionsListPropsType> = ({
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
    cursor,
    searchQuery,
    noResultsLabel,
    theme,
    groupClassName,
}) => {
    if (options && options.length) {
        const displayedGroups: ObjectLiteralType = {};

        return options.map((option: SuggestionObjectType, index: number) => {
            const { label, groupId } = option;
            let group: SearchGroupObjectType | null = null;
            if (groupId && groupId in groupIndex && !displayedGroups[groupId]) {
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
                        cursor={cursor}
                        searchQuery={searchQuery}
                        theme={theme}
                    />
                </>
            );
        });
    }

    return (
        <SearchEmptySuggestionsList
            theme={theme}
            noResultsLabel={noResultsLabel}
        />
    );
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
    cursor: PropTypes.number,
    searchQuery: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
};
