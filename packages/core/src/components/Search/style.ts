import styled, { css } from 'styled-components';

import {
    marginProps,
    widthProps,
    reset,
    spacing,
    getComponentOverride,
    propsBlocker,
    zIndexSearchSuggestionsList,
    durationNormal,
    focusWithin,
    transition,
    token,
} from '@deliveryhero/armor-system';

import {
    SearchRootPropsType,
    SearchSuggestionsContainerPropsType,
    SearchSuggestionsListPropsType,
} from './type';
import { TextInput } from '../TextInput';

const searchSuggestionsContainerStyle = ({
    searchQuery,
    suggestionListHeight,
}: SearchSuggestionsContainerPropsType) => {
    let result = css`
        box-shadow: ${token('elevation.medium')};
        margin-top: ${spacing(1)};
        margin-bottom: ${spacing(1)};
    `;

    if (suggestionListHeight) {
        result = css`
            ${result};
            max-height: ${spacing(Number(suggestionListHeight))};
        `;
    }

    if (searchQuery && searchQuery.length) {
        result = css`
            ${result};
            height: fit-content;
            ${transition({ 'max-height': true })};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const SearchRoot = styled.div.withConfig(
    propsBlocker,
)<SearchRootPropsType>`
    ${reset};
    cursor: default;
    display: inline-block;
    flex-flow: row nowrap;
    position: relative;
    ${getComponentOverride('Search')};
    ${marginProps};
    ${widthProps};
`;

export const SearchSuggestionsContainer = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsContainerPropsType>`
    background-color: white;
    box-sizing: border-box;
    flex-direction: column;
    height: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    position: absolute;
    transition: ${durationNormal}ms;
    z-index: ${zIndexSearchSuggestionsList};
    ${searchSuggestionsContainerStyle};
`;

export const SearchSuggestionsListContainer = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsListPropsType>`
    display: flex;
    flex-direction: column;
`;

export const SearchTextInput = styled(TextInput)<SearchRootPropsType>`
    font-weight: ${token('typography.paragraphMedium.fontWeight')};
    ${({ disabled, error }) =>
        focusWithin({ disabled, error, noOutline: true })};
`;
