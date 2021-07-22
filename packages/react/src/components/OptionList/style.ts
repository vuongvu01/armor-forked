import styled, { css } from 'styled-components';
import { transitionDurationInSec } from '../../constants';
import {
    OptionListBeforeSectionContainerPropsType,
    OptionListContainerPropsType,
    OptionListItemGroupPropType,
    OptionListItemPropsType,
    OptionListItemTypographyPropsType,
    OptionListVirtualOffsetType,
    OptionListRootPropsType,
    OptionListSearchPropsType,
} from './type';
import {
    color,
    elevation,
    getComponentOverride,
    pixelToRem,
    propsBlocker,
    spacing,
    typography,
} from '../../system';
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
export const OptionListRoot = styled.div.withConfig(propsBlocker)<
    OptionListRootPropsType
>`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    padding-bottom: 0;
    padding-top: 0;
    transition: ${transitionDurationInSec}s;
    box-shadow: ${elevation('large')};

    ${getOptionListStyle};
    ${getComponentOverride('OptionList')};
`;

export const OptionListContainer = styled.div.withConfig(propsBlocker)<
    OptionListContainerPropsType
>`
    overflow: auto;
`;

export const OptionListBeforeSectionContainer = styled.div.withConfig(
    propsBlocker,
)<OptionListBeforeSectionContainerPropsType>`
    top: 0;
    background: ${color('neutral.00')};
    border-bottom: solid 1px ${color('neutral.02')};
`;

export const OptionListSearchContainer = styled.div.withConfig(propsBlocker)<
    OptionListSearchPropsType
>`
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

const optionItemStyle = ({
    isSelected,
    item: { disabled },
}: OptionListItemPropsType) => {
    let result = css`
        background-color: ${color('neutral.00')};
        min-height: ${spacing(10)};
        padding: ${spacing(2)} ${spacing(4)};
        &:hover {
            background-color: ${color('primary.lightest')};
        }
    `;

    if (isSelected) {
        result = css`
            ${result};
            background-color: ${color('primary.lightest')};
            border-left-color: ${disabled
                ? color('neutral.04')
                : color('primary.main')};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            background-color: ${color('neutral.02')};

            cursor: not-allowed;
            &:hover {
                background-color: ${color('neutral.02')};
            }
        `;
    }

    return result;
};

export const OptionListItem = styled.div.withConfig(propsBlocker)<
    OptionListItemPropsType
>`
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    border-left: 2px solid transparent;

    ${optionItemStyle}
    ${getComponentOverride('OptionListItem')};
`;

export const OptionListItemTypography = styled(Typography)<
    OptionListItemTypographyPropsType
>`
    ${({ enableContentEllipsis }) =>
        enableContentEllipsis !== false
            ? css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              `
            : ''};
`;

const getSearchSuggestionListGroupDynamicStyle = ({
    enableSeparator,
}: OptionListItemGroupPropType) => {
    let result = {};

    if (enableSeparator) {
        result = css`
            border-top: 1px solid ${color('neutral.02')};
            padding-top: ${spacing(10)};
        `;
    }

    return result;
};

export const OptionListItemGroup = styled.div.withConfig(propsBlocker)<
    OptionListItemGroupPropType
>`
    padding: ${spacing(6)} ${spacing(4)} ${spacing(2)} ${spacing(4)};
    ${typography('labelMedium')};
    font-size: ${pixelToRem(14)};
    color: ${color('neutral.05')};
    ${getSearchSuggestionListGroupDynamicStyle};
`;

export const OptionListVirtualPadding = styled.div.withConfig(propsBlocker)<
    OptionListVirtualOffsetType
>`
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    height: ${({ height }) => height}px;
`;
