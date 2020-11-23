import React, { HTMLAttributes } from 'react';

import { SearchQueryType, SuggestionObjectType } from '../type';
import { ThemeType } from '../../../styling';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type SuggestionItemPropsType = {
    theme: ThemeType;
    suggestionIndex: number;
    cursor?: number;
    icon?: null | React.ReactElement;
    option: SuggestionObjectType;
    searchQuery?: SearchQueryType;
    handleSuggestionClick: (
        event: React.MouseEvent<HTMLDivElement>,
        suggestionIndex: number,
    ) => void;
    additionalInfo?: null | React.ReactElement;
} & HTMLAttributes<HTMLElement>;
