import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { EmptySuggestionsList } from '../EmptySuggestionsList';
import { SuggestionObjectType } from '../type';
import { SuggestionItem } from '../SuggestionItem';
import { SuggestionsListPropsType } from './type';

// TODO (nmelnikov 2020-10-01): tighten types via the existing SuggestionsListPropsType
// @ts-ignore
export const SuggestionsList: FunctionComponent<SuggestionsListPropsType> = ({
    options,
    handleSuggestionClick,
    additionalInfo,
    icon,
    cursor,
    searchQuery,
}) =>
    options && options.length > 0 ? (
        options.map((option: SuggestionObjectType, index: number) => {
            const { label } = option;

            return (
                <SuggestionItem
                    option={option}
                    suggestionIndex={index}
                    handleSuggestionClick={handleSuggestionClick}
                    additionalInfo={additionalInfo}
                    icon={icon}
                    key={label}
                    cursor={cursor}
                    searchQuery={searchQuery}
                />
            );
        })
    ) : (
        <EmptySuggestionsList />
    );

SuggestionsList.propTypes = {
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
