import React, { ChangeEvent, HTMLAttributes, ReactElement } from 'react';

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
    ) => ReactElement;
    defaultQuery: SearchQueryType;
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
    onItemSelect: (option: SuggestionObjectType) => void;
    options: SuggestionObjectType[];
    groups: SearchGroupObjectType[];
    placeholder: string;
    enableSuggestions: boolean;
    isLoading: boolean;
    suggestionListHeight: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    WidthAttributesType &
    MarginAttributesType &
    ObjectLiteralType;

export type SearchPropsType = SearchEffectivePropsType;

export type SearchRootPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsContainerPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsListPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemIconPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemLabelPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemActionPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;
