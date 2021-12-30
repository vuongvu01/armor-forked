import { HTMLAttributes } from 'react';
import { ThemeType } from '@deliveryhero/armor-system';

import {
    SearchEffectivePropsType,
    SearchPropsType,
    SuggestionObjectType,
} from '../type';
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
        'searchQuery' | 'icon' | 'cursorPosition' | 'handleSuggestionClick'
    > &
    HTMLAttributes<HTMLElement>;

export type SearchSuggestionItemRootPropsType = {
    isHighlighted?: boolean;
} & HTMLAttributes<HTMLElement>;

export type SearchSuggestionsItemPropsType = {
    isHighlighted?: boolean;
} & ComponentElementStylePropsType;

export type SearchSuggestionItemLabelTypographyPropsType =
    SearchEffectivePropsType & ComponentElementStylePropsType;
