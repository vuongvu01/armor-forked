import styled, { css } from 'styled-components';
import {
    SearchSuggestionItemLabelTypographyPropsType,
    SearchSuggestionItemRootPropsType,
    SearchSuggestionsItemPropsType,
} from './type';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { color, spacing, typography } from '../../../system/mixins';
import { Typography } from '../../Typography';
import {
    SearchSuggestionsItemActionPropsType,
    SearchSuggestionsItemIconPropsType,
    SearchSuggestionsItemLabelPropsType,
} from '../type';
import { getPropsBlocker, makePropList } from '../../../utils';

const propertyList = makePropList([
    'searchQuery',
    'suggestionListHeight',
    'icon',
    'isHighlighted',
]);

const maxLabelWidthInPercent = '70%';
const minLabelWidthInPx = '140px';
const maxSpacingAllocatedToIcon = 6;
const defaultLabelColor = color('neutral.05');
const defaultLabelColorHover = color('neutral.06');
const defaultActionColor = color('neutral.04');

export const SearchSuggestionItemRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
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
    getPropsBlocker(propertyList),
)<SearchSuggestionsItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: space-between;
    cursor: pointer;

    padding-bottom: ${spacing(2)};
    padding-left: ${spacing(4)};
    padding-right: ${spacing(4)};
    padding-top: ${spacing(2)};

    ${searchSuggestionsItemStyle}
    ${getComponentOverride('SearchSuggestionItem')};
`;

export const SearchSuggestionItemLabelTypography = styled(
    Typography,
).withConfig(getPropsBlocker(propertyList, false))<
    SearchSuggestionItemLabelTypographyPropsType
>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SearchEmptySuggestionsEmptyItemLabelTypography = styled(
    Typography,
).withConfig(getPropsBlocker(propertyList, false))<
    SearchSuggestionItemLabelTypographyPropsType
>`
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
    getPropsBlocker(propertyList),
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
    getPropsBlocker(propertyList),
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
    getPropsBlocker(propertyList),
)<SearchSuggestionsItemActionPropsType>`
    align-items: flex-start;
    box-sizing: border-box;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    padding-left: ${spacing(2)};

    ${typography('paragraphMedium')};
    ${searchSuggestionsItemActionStyle};
`;
