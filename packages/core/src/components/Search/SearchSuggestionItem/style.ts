import styled, { css } from 'styled-components';
import {
    color,
    spacing,
    typography,
    getComponentOverride,
    propsBlocker,
    token,
} from '@deliveryhero/armor-system';

import {
    SearchSuggestionItemLabelTypographyPropsType,
    SearchSuggestionItemRootPropsType,
    SearchSuggestionsItemPropsType,
} from './type';
import { Typography } from '../../Typography';
import {
    SearchSuggestionsItemActionPropsType,
    SearchSuggestionsItemIconPropsType,
    SearchSuggestionsItemLabelPropsType,
} from '../type';

const maxLabelWidthInPercent = '70%';
const minLabelWidthInPx = '140px';
const maxSpacingAllocatedToIcon = 6;
const defaultLabelColor = color('neutral.07');
const defaultLabelColorHover = color('neutral.11');
const defaultActionColor = color('neutral.05');

/** 👉 ROOT ELEMENT */
export const SearchSuggestionItemRoot = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionItemRootPropsType>`
    .Search-SuggestionsItemIcon {
        color: ${defaultLabelColor};
    }

    .Search-LabelTypography {
        color: ${defaultLabelColor};
    }

    .Search-SuggestionsItemAction {
        color: ${defaultActionColor};
    }

    &:hover {
        .Search-SuggestionsItemIcon {
            color: ${defaultLabelColorHover};
        }

        .Search-LabelTypography {
            color: ${defaultLabelColorHover};
        }

        .Search-SuggestionsItemAction {
            color: ${defaultActionColor};
        }
    }
`;

const searchSuggestionsItemStyle = ({
    isHighlighted,
}: SearchSuggestionsItemPropsType) => {
    let result = {};

    if (isHighlighted) {
        result = css`
            ${result};
            background-color: ${color('primary.lightest')};
        `;
    }

    return result;
};

export const SearchSuggestionItemContainer = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: ${color('primary.lightest')};
    }

    padding-bottom: ${spacing(2)};
    padding-left: ${spacing(4)};
    padding-right: ${spacing(4)};
    padding-top: ${spacing(2)};

    ${searchSuggestionsItemStyle}
    ${getComponentOverride('SearchSuggestionItem')};
`;

export const SearchSuggestionItemLabelTypography = styled(
    Typography,
)<SearchSuggestionItemLabelTypographyPropsType>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SearchEmptySuggestionsEmptyItemLabelTypography = styled(
    Typography,
)<SearchSuggestionItemLabelTypographyPropsType>`
    text-align: center;
`;

const searchSuggestionsItemIconStyle = ({
    icon,
    renderItemIcon,
}: SearchSuggestionsItemIconPropsType) => {
    let result = css`
        padding-left: 2px;
        padding-right: ${spacing(3)};
    `;

    if (!(icon || renderItemIcon)) {
        result = css`
            ${result};
            padding-right: ${spacing(maxSpacingAllocatedToIcon)};
        `;
    }

    return result;
};

export const SearchSuggestionsItemIcon = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsItemIconPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    ${searchSuggestionsItemIconStyle}
`;

const searchSuggestionsItemLabelStyle = ({
    renderItemAdditionalInfo,
}: SearchSuggestionsItemLabelPropsType) => {
    return renderItemAdditionalInfo
        ? css`
              max-width: max(${maxLabelWidthInPercent}, ${minLabelWidthInPx});
          `
        : css`
              min-width: ${minLabelWidthInPx};
          `;
};

export const SearchSuggestionsItemLabel = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsItemLabelPropsType>`
    padding-right: ${spacing(2)};
    box-sizing: border-box;
    flex-grow: 1;

    ${searchSuggestionsItemLabelStyle}
`;

const searchSuggestionsItemActionStyle = ({
    renderItemAdditionalInfo,
}: SearchSuggestionsItemActionPropsType) => {
    return renderItemAdditionalInfo
        ? css`
              width: calc(
                  100% - max(${maxLabelWidthInPercent}, ${minLabelWidthInPx}) -
                      ${spacing(maxSpacingAllocatedToIcon)}
              );
          `
        : css``;
};

export const SearchSuggestionsItemAction = styled.div.withConfig(
    propsBlocker,
)<SearchSuggestionsItemActionPropsType>`
    align-items: flex-start;
    box-sizing: border-box;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    padding-left: ${spacing(2)};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    ${searchSuggestionsItemActionStyle};
`;
