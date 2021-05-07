import styled, { css } from 'styled-components';

import {
    marginAttributes,
    widthAttributes,
    reset,
    spacing,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import {
    SearchRootPropsType,
    SearchSuggestionsContainerPropsType,
    SearchSuggestionsListPropsType,
} from './type';
import { zIndexSearchSuggestionsList } from '../../tokens';
import { transitionDurationInSec } from '../../constants';
import { TextInput } from '../TextInput';

const searchSuggestionsContainerStyle = ({
    searchQuery,
    suggestionListHeight,
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsContainerPropsType) => {
    let result = Search.SearchSuggestionsContainer.base;

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
            transition: max-height ${transitionDurationInSec}s ease;
        `;
    }

    return result;
};

const searchTextInputStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchRootPropsType) => {
    return Search.TextInput.base;
};

/** 👉 ROOT ELEMENT */
export const SearchRoot = styled.div.withConfig(propsBlocker)<
    SearchRootPropsType
>`
    ${reset};
    cursor: default;
    display: inline-block;
    flex-flow: row nowrap;
    position: relative;

    ${marginAttributes};
    ${widthAttributes};

    ${getComponentOverride('Search')};
`;

export const SearchSuggestionsContainer = styled.div.withConfig(propsBlocker)<
    SearchSuggestionsContainerPropsType
>`
    background-color: white;
    box-sizing: border-box;
    flex-direction: column;
    height: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    position: absolute;
    transition: ${transitionDurationInSec}s;
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
    ${searchTextInputStyle};
`;
