import React, { HTMLAttributes } from 'react';

import {
    SearchEffectivePropsType,
    SearchGroupObjectIndexType,
    SearchPropsType,
    SearchQueryType,
} from '../type';
import { ComponentElementStylePropsType } from '../../type';

export type SearchSuggestionsListPropsType = Partial<{
    groupIndex: SearchGroupObjectIndexType;
    cursor?: number;
    icon?: null | React.ReactElement;
    searchQuery?: SearchQueryType;
    noResultsLabel?: string;
    handleSuggestionClick: (
        event: React.MouseEvent<HTMLDivElement>,
        suggestionIndex: number,
    ) => void;
    groupClassName?: string;
}> &
    Pick<
        SearchPropsType,
        'renderItemAdditionalInfo' | 'renderItemIcon' | 'options'
    > &
    Pick<SearchEffectivePropsType, 'additionalInfo'> &
    HTMLAttributes<HTMLElement> &
    Pick<ComponentElementStylePropsType, 'theme'>;

export type SearchSuggestionListGroupPropsType = {
    enableSeparator: boolean;
};
