import React, {
    ChangeEvent,
    HTMLAttributes,
    MutableRefObject,
    ReactElement,
} from 'react';

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
    isSuggestionsListShown?: boolean;
};

export type SearchEffectivePropsType = Indexed<{
    /**
     * @deprecated
     * Use renderItemAdditionalInfo
     */
    additionalInfo?: null | React.ReactElement;
    renderItemAdditionalInfo?: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactElement;
    defaultQuery?: SearchQueryType;
    disabled?: boolean;
    error?: boolean;
    /**
     * @deprecated
     * Use renderItemIcon
     */
    icon?: null | React.ReactElement;
    renderItemIcon?: (
        option: SuggestionObjectType,
        optionIndex?: number,
    ) => ReactElement;
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

export type SearchSuggestionsItemIconPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemLabelPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;

export type SearchSuggestionsItemActionPropsType = SearchEffectivePropsType &
    ComponentElementStylePropsType;
