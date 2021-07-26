import React, {
    ChangeEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactChild,
    ReactElement,
} from 'react';

import { MarginAttributesType, WidthAttributesType } from '../../system';
import {
    DictionaryItemIDBased,
    ObjectLiteralType,
    ScalarType,
} from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type SuggestionObjectType = {
    value: ScalarType;
    label: string;
    groupId?: ScalarType;
} & ObjectLiteralType;

export type SearchGroupObjectType = DictionaryItemIDBased & ObjectLiteralType;

export type SearchGroupObjectIndexType = ObjectLiteralType<
    SearchGroupObjectType
>;

export type SearchQueryType = string | readonly string[];

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    disabled?: boolean;
    isSuggestionsListShown?: boolean;
};

export type SearchEffectivePropsType = Partial<{
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo: null | React.ReactElement;
    renderItemAdditionalInfo: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactChild;
    defaultQuery: SearchQueryType;
    query: SearchQueryType;
    disabled: boolean;
    error: boolean;
    /**
     * @deprecated
     * Use renderItemIcon
     */
    icon: null | React.ReactElement;
    renderItemIcon: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactElement;
    disableClearAction: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onQueryChange: (newValue: SearchQueryType) => void;
    onItemSelect: (option: SuggestionObjectType) => void;
    options: SuggestionObjectType[];
    groups: SearchGroupObjectType[];
    placeholder: string;
    noResultsLabel?: string;
    enableSuggestions: boolean;
    isLoading: boolean;
    suggestionListHeight: ScalarType;
}> &
    Pick<InputHTMLAttributes<HTMLInputElement>, 'autoFocus'> &
    HTMLAttributes<HTMLElement> &
    WidthAttributesType &
    MarginAttributesType;

export type SearchPropsType = SearchEffectivePropsType;

export type SearchRootPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsContainerPropsType = {
    searchQuery?: SearchQueryType;
    suggestionListHeight: SearchEffectivePropsType['suggestionListHeight'];
} & ComponentElementStylePropsType;

export type SearchSuggestionsListPropsType = ComponentElementStylePropsType;

export type SearchSuggestionsItemIconPropsType = Pick<
    SearchEffectivePropsType,
    'icon' | 'renderItemIcon'
> &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemLabelPropsType = Pick<
    SearchEffectivePropsType,
    'renderItemAdditionalInfo'
> &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemActionPropsType = Pick<
    SearchEffectivePropsType,
    'renderItemAdditionalInfo'
> &
    ComponentElementStylePropsType;
