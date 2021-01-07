import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SearchEmptySuggestionsList } from '../SearchEmptySuggestionsList';
import { GroupObjectType, SuggestionObjectType } from '../type';
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
    additionalInfo,
    icon,
    cursor,
    searchQuery,
    theme,
    groupClassName,
}) => {
    if (options && options.length) {
        const displayedGroups: ObjectLiteralType = {};

        return options.map((option: SuggestionObjectType, index: number) => {
            const { label, groupId } = option;
            let group: GroupObjectType | null = null;
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
                        suggestionIndex={index}
                        handleSuggestionClick={handleSuggestionClick}
                        additionalInfo={additionalInfo}
                        icon={icon}
                        cursor={cursor}
                        searchQuery={searchQuery}
                        theme={theme}
                    />
                </>
            );
        });
    }

    return <SearchEmptySuggestionsList theme={theme} />;
};

SearchSuggestionsList.propTypes = {
    handleSuggestionClick: PropTypes.func.isRequired,
    additionalInfo: PropTypes.element,
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