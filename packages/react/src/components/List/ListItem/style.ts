import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

import {
    ListItemRootPropsType,
    PrimaryIconContainerPropsType,
    LeadSubtitlePropsType,
    PrimaryListItemContainerPropsType,
    ActionsContainerPropsType,
} from './type';
import {
    marginAttributes,
    propsBlocker,
    getComponentOverride,
    color,
    reset,
    typography,
    spacing,
    pixelToRem,
} from '../../../system';
import { ListRootPropsType } from '../type';

const getRootStyle = ({
    disabled,
    size,
    lead,
    subtitle,
    divider,
}: ListItemRootPropsType) => {
    let result = {};

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
            cursor: not-allowed;
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
            padding: ${spacing(2)} ${spacing(2)};
        `;
    } else if (size === 'medium') {
        result = css`
            ${result};
            min-height: ${spacing(6)};
            padding: ${spacing(3)} ${spacing(3)};
        `;
    } else if (size === 'large') {
        result = css`
            ${result};
            min-height: ${spacing(10)};
            padding: ${spacing(4)} ${spacing(4)};
        `;
    }
    if (lead || subtitle) {
        result = css`
            ${result};
            min-height: ${spacing(15.5)};
            padding: ${spacing(4)} ${spacing(4)};
        `;
    }
    return result;
};

const getSecondaryListStyle = ({ lead, disabled }: ListItemRootPropsType) => {
    let result = {};
    if (lead) {
        result = css`
            ${result};
            display: flex;
            align-self: flex-end;
        `;
    }
    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.07')};
        `;
    }
    return result;
};

const getLeadSubtitleStyle = ({ disabled }: ListItemRootPropsType) => {
    let result = {};
    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.07')};
        `;
    }
    return result;
};

const getPrimaryListStyle = ({ lead, disabled }: ListItemRootPropsType) => {
    let result = {};
    if (lead) {
        result = css`
            ${result};
            margin-top: 0;
        `;
    }
    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
        `;
    } else {
        result = css`
            ${result};
            color: ${color('neutral.11')};
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

export const ListItemRoot = styled(Wrapper).withConfig(propsBlocker)<
    ListItemRootPropsType
>`
    ${reset};
    ${typography('paragraphMedium')};

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
    ${marginAttributes};
`;

export const PrimaryListItem = styled.div.withConfig(propsBlocker)<
    ListItemRootPropsType
>`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: center;
    ${getPrimaryListStyle};
`;

export const SecondaryListItem = styled.div.withConfig(propsBlocker)<
    ListItemRootPropsType
>`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: center;
    color: ${color('neutral.07')};
    ${getSecondaryListStyle};
`;

export const PrimaryIconContainer = styled.div.withConfig(propsBlocker)<
    PrimaryIconContainerPropsType
>`
    margin-right: ${spacing(4)};
    min-height: fit-content;
`;

export const ActionsContainer = styled.div.withConfig(propsBlocker)<
    ActionsContainerPropsType
>`
    margin-left: ${spacing(2)};
`;

export const PrimaryLeadSubtitle = styled.div.withConfig(propsBlocker)<
    LeadSubtitlePropsType
>`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    font-size: ${pixelToRem(14)};
    ${getLeadSubtitleStyle}
`;

export const PrimaryListItemContainer = styled.div.withConfig(propsBlocker)<
    PrimaryListItemContainerPropsType
>`
    display: flex;
    flex-direction: column;
`;
