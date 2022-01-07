import styled, { css } from 'styled-components';
import {
    color,
    elevation,
    getComponentOverride,
    pixelToRem,
    propsBlocker,
    reset,
    spacing,
    durationNormal,
    typography,
} from '@deliveryhero/armor-system';

import {
    OptionListBeforeSectionContainerPropsType,
    OptionListContainerPropsType,
    OptionListItemAdditionalInfoPropsType,
    OptionListItemGroupPropType,
    OptionListItemGroupTypographyPropsType,
    OptionListItemPropsType,
    OptionListItemTypographyPropsType,
    OptionListRootPropsType,
    OptionListSearchPropsType,
    OptionListVirtualOffsetType,
} from './type';
import { Search } from '../Search';
import { Typography } from '../Typography';

const getOptionListStyle = ({
    isOptionListShown,
    enableAbsolutePositioning,
}: OptionListRootPropsType) => {
    let result = css`
        height: ${isOptionListShown ? 'auto' : '0'};
    ` as {};

    if (enableAbsolutePositioning !== false) {
        result = css`
            ${result};
            position: absolute;
            top: ${spacing(1)};
            left: 0;
            right: 0;
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const OptionListRoot = styled.div.withConfig(
    propsBlocker,
)<OptionListRootPropsType>`
    ${reset};
    ${typography('paragraphMedium')};
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    padding-bottom: 0;
    padding-top: 0;
    transition: ${durationNormal}ms;
    box-shadow: ${elevation('large')};

    ${getOptionListStyle};
    ${getComponentOverride('OptionList')};
`;

export const OptionListContainer = styled.div.withConfig(
    propsBlocker,
)<OptionListContainerPropsType>`
    overflow: auto;
`;

export const OptionListBeforeSectionContainer = styled.div.withConfig(
    propsBlocker,
)<OptionListBeforeSectionContainerPropsType>`
    top: 0;
    background: ${color('neutral.00')};
`;

export const OptionListSearchContainer = styled.div.withConfig(
    propsBlocker,
)<OptionListSearchPropsType>`
    padding: ${spacing(4)};
`;

export const OptionListSearch = styled(Search).attrs({
    enableSuggestions: false,
})<OptionListSearchPropsType>`
    width: 100%;
`;

export const OptionListFooterContainer = styled.div.attrs({
    enableSuggestions: false,
})<OptionListSearchPropsType>`
    padding: ${spacing(3)};
    display: flex;
    justify-content: space-between;
    background-color: ${color('neutral.01')};
    border-top: 1px solid ${color('neutral.03')};
`;

const focusedHoverState = css`
    background-color: ${color('primary.01')};

    .Checkbox-Checkmark:before {
        border-color: ${color('primary.08')};
    }
`;

const optionItemStyle = ({
    item: { disabled },
    isFocused,
}: OptionListItemPropsType) => {
    let result = css`
        background-color: ${color('neutral.00')};
        min-height: ${spacing(10)};
        padding: ${spacing(2)} ${spacing(4)};
        &:hover {
            ${focusedHoverState}
        }
    `;

    if (isFocused) {
        result = css`
            ${result};
            ${focusedHoverState}
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            background-color: ${isFocused
                ? color('primary.01')
                : color('neutral.02')};

            cursor: not-allowed;
            &:hover {
                background-color: ${color('neutral.02')};

                .Checkbox-Checkmark:before {
                    border-color: ${color('neutral.03')};
                }
            }
        `;
    }

    return result;
};

export const OptionListItem = styled.div.withConfig(
    propsBlocker,
)<OptionListItemPropsType>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    border-left: 2px solid transparent;

    ${optionItemStyle};
    ${getComponentOverride('OptionListItem')};
`;

export const OptionListItemTypography = styled(
    Typography,
)<OptionListItemTypographyPropsType>`
    flex-grow: 1;
    ${({ enableContentEllipsis }) =>
        enableContentEllipsis !== false
            ? css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              `
            : ''};
`;

export const OptionListItemGroupTypography = styled(
    Typography,
)<OptionListItemGroupTypographyPropsType>`
    color: ${color('neutral.07')};
    ${({ enableContentEllipsis }) => {
        let result = css``;

        if (enableContentEllipsis !== false) {
            result = css`
                ${result};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            `;
        }

        return result;
    }}
`;

const getSearchSuggestionListGroupDynamicStyle = ({
    enableSeparator,
    enableGroupSelection,
}: OptionListItemGroupPropType) => {
    let result = {};

    if (enableSeparator || enableGroupSelection) {
        result = css`
            border-top: 1px solid ${color('neutral.02')};
        `;
    }

    return result;
};

const getOptionListItemGroupRootStyle = ({
    multiple,
    enableGroupSelection,
}: OptionListItemGroupPropType) => {
    let result = css`
        padding: ${spacing(6)} ${spacing(4)} ${spacing(2)} ${spacing(4)};
    `;

    if (multiple && enableGroupSelection) {
        result = css`
            ${result};
            padding: ${spacing(3)} ${spacing(4)};
            text-transform: uppercase;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            border-left: 2px solid transparent;
            &:hover {
                background-color: ${color('primary.lightest')};
            }
        `;
    }

    return result;
};

export const OptionListItemGroupRoot = styled.div.withConfig(
    propsBlocker,
)<OptionListItemGroupPropType>`
    ${typography('labelSmall')};
    color: ${color('neutral.07')};
    ${getOptionListItemGroupRootStyle};
    ${getSearchSuggestionListGroupDynamicStyle};
    ${getComponentOverride('OptionListItemGroup')}
`;

export const OptionListVirtualPadding = styled.div.withConfig(
    propsBlocker,
)<OptionListVirtualOffsetType>`
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    height: ${({ height }) => height}px;
`;

export const OptionListItemAdditionalInfo = styled.div.withConfig(
    propsBlocker,
)<OptionListItemAdditionalInfoPropsType>``;
