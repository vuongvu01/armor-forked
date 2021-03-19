import { HTMLAttributes } from 'react';

import { ThemeType } from '../../../styling';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type SearchEmptySuggestionsListPropsType = {
    noResultsLabel?: string;
    theme: ThemeType;
} & HTMLAttributes<HTMLElement>;
