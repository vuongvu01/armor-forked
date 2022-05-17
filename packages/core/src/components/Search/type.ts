import {
    ChangeEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactChild,
    ReactElement,
} from 'react';
import {
    MarginPropsType,
    WidthPropsType,
    ScalarType,
} from '@deliveryhero/armor-system';

import { DictionaryItemIDBasedType, ObjectLiteralType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type SuggestionObjectType = {
    value: ScalarType;
    label: string;
    groupId?: ScalarType;
} & ObjectLiteralType;

export type SearchGroupObjectType = DictionaryItemIDBasedType &
    ObjectLiteralType;

export type SearchGroupObjectIndexType =
    ObjectLiteralType<SearchGroupObjectType>;

export type SearchQueryType = string | readonly string[];

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
    disabled?: boolean;
    isSuggestionsListShown?: boolean;
};

/** 👉 PROPS TYPE */
export type SearchEffectivePropsType = Partial<{
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo: null | ReactElement;
    /**
     * @armor-docs-expand SuggestionObjectType
     */
    renderItemAdditionalInfo: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactChild;
    /**
     * @armor-docs-expand SearchQueryType
     */
    defaultQuery: SearchQueryType;
    /**
     * @armor-docs-expand SearchQueryType
     */
    query: SearchQueryType;
    disabled: boolean;
    error: boolean;
    /**
     * @deprecated
     * Use renderItemIcon
     */
    icon: null | ReactElement;
    /**
     * @armor-docs-expand SuggestionObjectType
     */
    renderItemIcon: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactElement;
    disableClearAction: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * @armor-docs-expand SearchQueryType
     */
    onQueryChange: (newValue: SearchQueryType) => void;
    /**
     * @armor-docs-expand SuggestionObjectType
     */
    onItemSelect: (option: SuggestionObjectType) => void;
    /**
     * @armor-docs-expand SuggestionObjectType
     */
    options: SuggestionObjectType[];
    /**
     * @armor-docs-expand SuggestionObjectType
     */
    groups: SearchGroupObjectType[];
    placeholder: string;
    noResultsLabel?: string;
    enableSuggestions: boolean;
    isLoading: boolean;
    suggestionListHeight: ScalarType;

    /** If set to true, the spacing of the component will be increased to match the *large* scale */
    large: boolean;
}> &
    Pick<InputHTMLAttributes<HTMLInputElement>, 'autoFocus'> &
    HTMLAttributes<HTMLElement> &
    WidthPropsType &
    MarginPropsType;

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
