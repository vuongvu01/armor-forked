import React, { ChangeEvent, HTMLAttributes, MutableRefObject } from 'react';

import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';
import { ClassNamesType, NodeStylePropsType } from '../type';

export type SuggestionObjectType = Indexed<{
    label: string;
    value: ScalarType;
    [key: string]: any;
}>;

export type SearchQueryType = string | readonly string[];

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
    disabled?: boolean;
};

type SearchEffectivePropsType = Indexed<{
    additionalInfo?: null | React.ReactElement;
    defaultQuery?: SearchQueryType;
    disabled?: boolean;
    icon?: null | React.ReactElement;
    disableClearAction?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onItemSelect?: (option: SuggestionObjectType) => void;
    options?: SuggestionObjectType[];
    placeholder?: string;
    isLoading?: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    WidthAttributesType &
    MarginAttributesType;

export type UseSearchBarType = {
    searchQuery?: SearchQueryType;
    containerRef: MutableRefObject<unknown>;
    handleSuggestionClick: (
        event: React.MouseEvent<HTMLDivElement>,
        suggestionIndex: number,
    ) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClearQuery: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleClick: () => void;
    internalInputRef: MutableRefObject<unknown>;
    isSuggestionsListShown: boolean;
    cursor: number;
};

export type SearchPropsType = SearchEffectivePropsType;

export type SearchRootPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsContainerPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsListPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsItemPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsItemIconPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsItemLabelPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchSuggestionsItemActionPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;

export type SearchLabelTypographyPropsType = SearchEffectivePropsType &
    NodeStylePropsType<SearchEffectivePropsType>;
