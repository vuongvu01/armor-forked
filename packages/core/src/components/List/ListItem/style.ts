import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    marginProps,
    propsBlocker,
    getComponentOverride,
    color,
    reset,
    typography,
    spacing,
    pixelToRem,
    fontWeightMedium,
    fontWeightRegular,
    token,
} from '@deliveryhero/armor-system';

import {
    ListItemRootPropsType,
    PrimaryIconContainerPropsType,
    LeadSubtitlePropsType,
    PrimaryListItemContainerPropsType,
    ActionsContainerPropsType,
} from './type';
import { ListRootPropsType } from '../type';

const getRootStyle = ({
    disabled,
    inactive,
    size,
    lead,
    subtitle,
    divider,
}: ListItemRootPropsType) => {
    let result = {};

    if (disabled || inactive) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
            cursor: ${inactive ? 'pointer' : 'not-allowed'};
        `;
    } else {
        result = css`
            ${result};
            &:hover {
                background-color: ${color('primary.lightest')};
                .PrimaryIconWrapper-Root {
                    border: 1px solid ${color('primary.lighter')};
                    box-sizing: border-box;
                    border-radius: ${spacing(2)};
                }
            }
        `;
    }

    if (divider) {
        result = css`
            ${result};
            &:not(:last-child) {
                border-bottom-width: 0.5px;
                border-bottom-style: solid;
                color: ${color('neutral.03')};
            }
        `;
    }
    if (size === 'small') {
        result = css`
            ${result};
            min-height: ${spacing(8)};
            padding: ${spacing(2)};
        `;
    } else if (size === 'medium') {
        result = css`
            ${result};
            min-height: ${spacing(6)};
            padding: ${spacing(3)};
        `;
    } else if (size === 'large') {
        result = css`
            ${result};
            min-height: ${spacing(10)};
            padding: ${spacing(4)};
        `;
    }
    if (lead || subtitle) {
        result = css`
            ${result};
            min-height: ${spacing(15.5)};
        `;
    }
    return result;
};

const getSecondaryListStyle = ({
    lead,
    disabled,
    inactive,
}: ListItemRootPropsType) => {
    let result = {};
    if (lead) {
        result = css`
            ${result};
            display: flex;
            align-self: flex-end;
        `;
    }
    if (disabled || inactive) {
        result = css`
            ${result};
            color: ${inactive ? color('neutral.07') : color('neutral.05')};
            cursor: ${inactive ? 'pointer' : 'not-allowed'};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.07')};
        `;
    }
    return result;
};

const getLeadSubtitleStyle = ({
    disabled,
    inactive,
}: ListItemRootPropsType) => {
    let result = {};
    if (disabled || inactive) {
        result = css`
            ${result};
            cursor: ${inactive ? 'pointer' : 'not-allowed'};
            color: ${inactive ? color('neutral.07') : color('neutral.05')};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.07')};
        `;
    }
    return result;
};

const getActionsContainerStyle = ({
    disabled,
    inactive,
}: ListItemRootPropsType) => {
    let result = css`
        color: ${color('neutral.07')};
    `;

    if (disabled || inactive) {
        result = css`
            ${result};
            color: ${inactive ? color('neutral.07') : color('neutral.05')};
        `;
    }
    return result;
};

const getPrimaryListStyle = ({
    lead,
    disabled,
    inactive,
}: ListItemRootPropsType) => {
    let result = {};

    if (lead) {
        result = css`
            ${result};
            margin-top: 0;
        `;
    }
    if (disabled || inactive) {
        result = css`
            ${result};
            color: ${inactive ? color('neutral.11') : color('neutral.05')};
            cursor: ${inactive ? 'pointer' : 'not-allowed'};
            font-weight: ${inactive ? fontWeightRegular : fontWeightMedium};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.11')};
            font-weight: ${fontWeightMedium};
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
const Wrapper = ({
    children,
    ...restProps
}: ListRootPropsType & {
    children: (props: ListRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const ListItemRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<ListItemRootPropsType>`
    ${reset};
    ${typography('labelMedium')};
    color: ${token('body.color')};

    display: flex;
    text-decoration: none;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    max-height: fit-content;
    font-size: inherit;
    border-radius: 0;
    background: ${color('neutral.00')};

    ${getRootStyle};
    ${getComponentOverride('ListItem')};
    ${marginProps};
`;

export const PrimaryListItem = styled.div.withConfig(
    propsBlocker,
)<ListItemRootPropsType>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    line-height: ${pixelToRem(24)};
    padding: 0 ${spacing(2)} 0 0;
    ${getPrimaryListStyle};
    ${getComponentOverride('ListItemPrimarySection')};
`;

export const SecondaryListItem = styled.div.withConfig(
    propsBlocker,
)<ListItemRootPropsType>`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    line-height: ${pixelToRem(24)};
    color: ${color('neutral.07')};
    ${getSecondaryListStyle};
`;

export const PrimaryIconContainer = styled.div.withConfig(
    propsBlocker,
)<PrimaryIconContainerPropsType>`
    margin-right: ${spacing(4)};
    min-height: fit-content;
`;

export const ActionsContainer = styled.div.withConfig(
    propsBlocker,
)<ActionsContainerPropsType>`
    margin-left: ${spacing(2)};
    ${getActionsContainerStyle}
`;

export const PrimaryLeadSubtitle = styled.div.withConfig(
    propsBlocker,
)<LeadSubtitlePropsType>`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    font-size: ${pixelToRem(14)};
    line-height: ${pixelToRem(20)};
    ${getLeadSubtitleStyle}
`;

export const PrimaryListItemContainer = styled.div.withConfig(
    propsBlocker,
)<PrimaryListItemContainerPropsType>`
    display: flex;
    flex-direction: column;
`;
