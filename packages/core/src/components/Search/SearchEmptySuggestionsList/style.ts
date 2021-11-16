import styled from 'styled-components';
import {
    colorGrey00,
    getComponentOverride,
    spacing,
    propsBlocker,
} from '@deliveryhero/armor-system';

import { SearchEmptySuggestionsListPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const SearchEmptySuggestionsListRoot = styled.div.withConfig(
    propsBlocker,
)<SearchEmptySuggestionsListPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    padding-bottom: ${spacing(2)};
    padding-left: ${spacing(4)};
    padding-right: ${spacing(4)};
    padding-top: ${spacing(2)};
    cursor: default;
    height: auto;

    &:hover {
        background-color: ${colorGrey00};
    }

    ${getComponentOverride('SearchEmptySuggestionsList')};
`;

export const SearchEmptySuggestionsItemLabel = styled.div.withConfig(
    propsBlocker,
)<SearchEmptySuggestionsListPropsType>`
    box-sizing: border-box;
    flex-grow: 1;
    min-width: ${spacing(33)};
`;
