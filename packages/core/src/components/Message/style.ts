import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    borderRadius,
    color,
    pixelToRem,
    spacing,
    typography,
    getComponentOverride,
    marginProps,
    propsBlocker,
    token,
    widthProps,
} from '@deliveryhero/armor-system';

import {
    MessageRootPropsType,
    MessageContentPropsType,
    MessageActionsPropsType,
    MessageIconPropsType,
    MessageExtraPropsType,
    MessageCentralPropsType,
    MessageEffectivePropsLevelType,
} from './type';
import { messageLevels } from './constants';
import { TypographyRoot } from '../Typography/style';

const getColorNameByMessageLevel = ({
    level,
    error,
    success,
    warning,
}: MessageEffectivePropsLevelType) => {
    if (level === messageLevels.error || error) {
        return 'error.08';
    }
    if (level === messageLevels.success || success) {
        return 'success.06';
    }
    if (level === messageLevels.warning || warning) {
        return 'warning.07';
    }

    return 'primary.03';
};

const getRootDynamicStyle = (props: MessageRootPropsType) => {
    const level = getColorNameByMessageLevel(props);

    return css`
        border-color: ${color(level)};
    `;
};

/** 👉 ROOT ELEMENT */
export const MessageRoot = styled.div.withConfig(
    propsBlocker,
)<MessageRootPropsType>`
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
    box-sizing: border-box;
    border: 1px solid ${color('primary.03')};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};
    padding: ${spacing(0, 4)};
    ${getRootDynamicStyle};
    ${getComponentOverride('Message')};
    ${marginProps};
    ${widthProps};
`;

export const MessageCentral = styled.div.withConfig(
    propsBlocker,
)<MessageCentralPropsType>`
    flex-grow: 1;
    align-self: center;
    display: flex;
`;

export const MessageContent = styled.div.withConfig(
    propsBlocker,
)<MessageContentPropsType>`
    flex-grow: 1;
    line-height: 1.5;
    color: ${color('neutral.11')};
    padding: ${spacing(4, 0)};

    ${TypographyRoot} {
        line-height: ${pixelToRem(24)};
        margin: 0;
        margin-top: ${spacing(1)};

        &:first-child {
            margin-top: 0;
        }
    }
`;

export const MessageActions = styled.div.withConfig(
    propsBlocker,
)<MessageActionsPropsType>`
    flex-shrink: 0;
    align-self: flex-start;
    margin-left: ${spacing(4)};
    padding: ${spacing(4, 0)};
`;

export const MessageExtra = styled.div.withConfig(
    propsBlocker,
)<MessageExtraPropsType>`
    flex-shrink: 0;
    align-self: flex-start;
    margin-left: ${spacing(4)};
    padding: ${spacing(4, 0)};
`;

const MessageIconWrapper = ({
    children,
    ...restProps
}: MessageIconPropsType & {
    children: (props: MessageIconPropsType) => ReactElement;
}) => children({ ...restProps });

const getIconDynamicStyle = (props: MessageRootPropsType) => {
    const level = getColorNameByMessageLevel(props);

    return css`
        color: ${color(level)};
    `;
};

export const MessageIcon = styled(MessageIconWrapper)<MessageIconPropsType>`
    flex: 0 0 auto;
    margin-right: ${spacing(2)};
    padding: ${spacing(4, 0)};
    ${getIconDynamicStyle};
`;

export const MessageCloseButtonContainer = styled.div`
    padding: ${spacing(4, 0)};
    margin-left: ${spacing(2)};
`;
