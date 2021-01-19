import React, { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';
import {
    GroupObjectIndexType,
    SearchPropsType,
    SearchQueryType,
} from '../type';

export type SearchSuggestionsListPropsType = Indexed<{
    groupIndex: GroupObjectIndexType;
    cursor?: number;
    icon?: null | React.ReactElement;
    searchQuery?: SearchQueryType;
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
    HTMLAttributes<HTMLElement>;

export type SearchSuggestionListGroupPropsType = {
    enableSeparator: boolean;
};
