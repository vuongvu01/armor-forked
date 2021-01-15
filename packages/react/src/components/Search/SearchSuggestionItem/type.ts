import { HTMLAttributes } from 'react';

import {
    SearchEffectivePropsType,
    SearchPropsType,
    SuggestionObjectType,
} from '../type';
import { ThemeType } from '../../../styling';
import { SearchSuggestionsListPropsType } from '../SearchSuggestionsList';
import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type SearchSuggestionItemPropsType = {
    theme: ThemeType;
    suggestionIndex: number;
    option: SuggestionObjectType;
    optionIndex?: number;
} & Pick<
    SearchPropsType,
    'renderItemAdditionalInfo' | 'renderItemIcon' | 'additionalInfo'
> &
    Pick<
        SearchSuggestionsListPropsType,
        'searchQuery' | 'icon' | 'cursor' | 'handleSuggestionClick'
    > &
    HTMLAttributes<HTMLElement>;

export type SearchSuggestionItemRootPropsType = {
    isHighlighted?: boolean;
} & HTMLAttributes<HTMLElement>;

export type SearchSuggestionsItemPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionItemLabelTypographyPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;
