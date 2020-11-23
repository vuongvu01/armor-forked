import React, { HTMLAttributes } from 'react';

import { Indexed } from '../../../type';
import { SearchQueryType, SuggestionObjectType } from '../type';

export type SuggestionsListPropsType = Indexed<{
    options?: SuggestionObjectType[];
    cursor?: number;
    icon?: null | React.ReactElement;
    searchQuery?: SearchQueryType;
    handleSuggestionClick: (
        event: React.MouseEvent<HTMLDivElement>,
        suggestionIndex: number,
    ) => void;
    additionalInfo?: null | React.ReactElement;
}> &
    HTMLAttributes<HTMLElement>;
