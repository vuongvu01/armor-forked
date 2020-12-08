import React, { ChangeEvent, HTMLAttributes, MutableRefObject } from 'react';

import {
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type SuggestionObjectType = {
    value: ScalarType;
    label: string;
    groupId?: ScalarType;
} & ObjectLiteralType;

export type GroupObjectType = {
    id: ScalarType;
    label: string;
} & ObjectLiteralType;

export type GroupObjectIndexType = ObjectLiteralType<GroupObjectType>;

export type SearchQueryType = string | readonly string[];

export type ClassBasedOnComponentType = {
    className?: string;
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
    groups?: GroupObjectType[];
    placeholder?: string;
    enableSuggestions?: boolean;
    isLoading?: boolean;
    suggestionListHeight?: ScalarType;
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
    ComponentElementStylePropsType;

export type SearchSuggestionsContainerPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsListPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemIconPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemLabelPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemActionPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchLabelTypographyPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;
