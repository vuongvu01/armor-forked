import React, { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';
import {
    GroupObjectIndexType,
    SearchQueryType,
    SuggestionObjectType,
} from '../type';

export type SearchSuggestionsListPropsType = Indexed<{
    options?: SuggestionObjectType[];
    groupIndex: GroupObjectIndexType;
    cursor?: number;
    icon?: null | React.ReactElement;
    searchQuery?: SearchQueryType;
    handleSuggestionClick: (
        event: React.MouseEvent<HTMLDivElement>,
        suggestionIndex: number,
    ) => void;
    additionalInfo?: null | React.ReactElement;
    groupClassName?: string;
}> &
    HTMLAttributes<HTMLElement>;

export type SearchSuggestionListGroupPropsType = {
    enableSeparator: boolean;
};
