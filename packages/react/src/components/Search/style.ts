import styled, { css } from 'styled-components';

import { marginAttributes, widthAttributes } from '../../system/attributes';
import { makePropList, shouldForwardProp } from '../../utils';
import {
    SearchLabelTypographyPropsType,
    SearchRootPropsType,
    SearchSuggestionsContainerPropsType,
    SearchSuggestionsItemActionPropsType,
    SearchSuggestionsItemIconPropsType,
    SearchSuggestionsItemLabelPropsType,
    SearchSuggestionsItemPropsType,
    SearchSuggestionsListPropsType,
} from './type';
import { zIndexSearchSuggestionsList } from '../../tokens';
import { transitionDurationInSec } from '../../constants';
import { Typography } from '../Typography';
import { TextInput } from '../TextInput';
import { TextInputPropsType } from '../TextInput/type';
import { spacing } from '../../system/mixins';

const containerPropertyList = makePropList([
    'searchQuery',
    'suggestionListHeight',
]);

const rootStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchRootPropsType) => {
    return Search.Root.base;
};

const searchSuggestionsContainerStyle = ({
    searchQuery,
    suggestionListHeight,
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsContainerPropsType) => {
    let result = css`
        max-height: ${suggestionListHeight};
        ${Search.SearchSuggestionsContainer.base};
    `;

    if (searchQuery && searchQuery.length) {
        result = css`
            ${result};
            height: fit-content;
            transition: max-height ${transitionDurationInSec}s ease;
        `;
    }

    return result;
};

const searchSuggestionsItemIconStyle = ({
    icon,
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsItemIconPropsType) => {
    let result = css`
        padding-left: 2px;
        ${Search.SearchSuggestionsItemIcon.base}
    `;

    if (!icon) {
        result = css`
            ${result};
            ${Search.SearchSuggestionsItemIcon.noIcon}
        `;
    }

    return result;
};

const searchSuggestionsItemActionStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsItemActionPropsType) => {
    return Search.SearchSuggestionsItemAction.base;
};

const searchTextInputStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchRootPropsType) => {
    return Search.TextInput.base;
};

const searchSuggestionsItemLabelStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsItemLabelPropsType) => {
    return Search.SearchSuggestionsItemLabel.base;
};

const searchLabelTypographyStyle = ({
    theme: {
        componentOverrides: { Search },
    },
}: SearchLabelTypographyPropsType) => {
    return Search.SearchLabelTypography.base;
};

const searchSuggestionsItemStyle = ({
    isHighlighted,
    theme: {
        componentOverrides: { Search },
    },
}: SearchSuggestionsItemPropsType) => {
    let result = Search.SearchSuggestionsItem.base;

    if (isHighlighted) {
        result = css`
            ${result};
            ${Search.SearchSuggestionsItem.highlighted}
        `;
    }

    return result;
};

export const SearchRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property),
})<SearchRootPropsType>`
    box-sizing: border-box;
    cursor: default;
    display: inline-block;
    flex-flow: row nowrap;
    position: relative;

    ${rootStyle}
    ${marginAttributes}
    ${widthAttributes}
`;

export const SearchSuggestionsContainer = styled.div.withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, containerPropertyList),
})<SearchSuggestionsContainerPropsType>`
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

    ${searchSuggestionsContainerStyle}
`;

export const SearchSuggestionsListContainer = styled.div<
    SearchSuggestionsListPropsType
>`
    display: flex;
    flex-direction: column;
`;

export const SearchSuggestionsItem = styled.div<SearchSuggestionsItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: space-between;
    cursor: pointer;

    ${searchSuggestionsItemStyle}
`;

export const SearchSuggestionsItemIcon = styled.div<
    SearchSuggestionsItemIconPropsType
>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    ${searchSuggestionsItemIconStyle}
`;

export const SearchSuggestionsItemLabel = styled.div<
    SearchSuggestionsItemLabelPropsType
>`
    align-items: flex-start;
    box-sizing: border-box;
    flex-grow: 1;
    min-width: 140px;

    ${searchSuggestionsItemLabelStyle}
`;

export const SearchLabelTypography = styled(Typography)<
    SearchLabelTypographyPropsType
>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${searchLabelTypographyStyle}
`;

export const SearchSuggestionsItemAction = styled.div<
    SearchSuggestionsItemActionPropsType
>`
    align-items: flex-start;
    box-sizing: border-box;
    max-width: min-content;
    overflow-x: hidden;
    white-space: nowrap;

    ${searchSuggestionsItemActionStyle}
`;

export const SearchTextInput = styled(TextInput)<SearchRootPropsType>`
    ${searchTextInputStyle}
`;
