import React, { HTMLAttributes } from 'react';

import { ClassNamesType } from '../../type';
import { SearchQueryType, SuggestionObjectType } from '../type';
import { ThemeType } from '../../../styling';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

export type SuggestionItemPropsType = {
    classNames?: ClassNamesType;
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
