import styled, { css } from 'styled-components';
import {
    color,
    elevation,
    getComponentOverride,
    propsBlocker,
    reset,
    spacing,
    durationNormal,
    typography,
    transition,
    heightProps,
    token,
    pointerEvents,
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
    color: ${token('body.color')};
    background-color: ${color('neutral.00')};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
    position: relative;
    height: fit-content;
    max-height: ${spacing(100)};
    ${heightProps};
`;

export const OptionListContent = styled.div.withConfig(
    propsBlocker,
)<OptionListContainerPropsType>`
    overflow: auto;
    max-height: inherit;
`;

const getGradientEffectStyle = ({ isShown }: { isShown?: boolean }) => {
    let result = css`
        position: absolute;
        width: 100%;
        height: ${spacing(13)};
        opacity: 0;
        z-index: 1;
        ${pointerEvents({ disabled: true })}
        ${transition({ opacity: true })};
    `;

    if (isShown) {
        result = css`
            ${result};
            opacity: 1;
        `;
    }

    return result;
};

export const TopGradientEffect = styled.div.withConfig(propsBlocker)<{
    isShown?: boolean;
}>`
    ${getGradientEffectStyle};
    top: 0;
    background: linear-gradient(
        180deg,
        ${color('neutral.00')} 0%,
        ${color('neutral.00', 0)} 80%
    );
`;
export const BottomGradientEffect = styled.div.withConfig(propsBlocker)<{
    isShown?: boolean;
}>`
    ${getGradientEffectStyle};
    bottom: 0;
    background: linear-gradient(
        180deg,
        ${color('neutral.00', 0)} 0%,
        ${color('neutral.00')} 80%
    );
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
    isSelected,
    multiple,
}: OptionListItemPropsType) => {
    const isActive = isSelected && !disabled && !multiple;

    let result = css`
        background-color: ${color('neutral.00')};
        min-height: ${spacing(10)};
        padding: ${spacing(2, 4)};

        ${transition({
            'background-color': true,
        })}

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

    if (isActive) {
        result = css`
            ${result};

            position: relative;
            ${pointerEvents({ disabled: true })}

            &:hover {
                background-color: ${color('neutral.00')};
            }

            &::before {
                content: '';

                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;

                width: ${spacing(0.5)};
                background: ${color('primary.07')};
            }
        `;
    }

    if (disabled) {
        result = css`
            ${result};

            background-color: ${isFocused
                ? color('primary.01')
                : color('neutral.02')};

            color: ${color('neutral.05')};

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
        padding: ${spacing(6, 4, 2)};
    `;

    if (multiple && enableGroupSelection) {
        result = css`
            ${result};

            padding: ${spacing(3, 4)};
            text-transform: uppercase;
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;

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
