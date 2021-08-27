import styled, { css } from 'styled-components';

import { ReactElement } from 'react';
import {
    borderRadius,
    color,
    noTextInteraction,
    pixelToRem,
    spacing,
    typography,
    getComponentOverride,
    marginAttributes,
    propsBlocker,
} from '../../system';
import {
    MessageRootPropsType,
    MessageContentPropsType,
    MessageActionsPropsType,
    MessageIconPropsType,
    MessageCloseButtonPropsType,
    MessageExtraPropsType,
    MessageCentralPropsType,
    MessageEffectivePropsLevelAndThemeType,
} from './type';
import { messageLevels } from './constants';
import { fontSize03 } from '../../tokens';

const getColorNameByMessageLevel = ({
    level,
    error,
    success,
    warning,
}: MessageEffectivePropsLevelAndThemeType) => {
    if (level === messageLevels.error || error) {
        return 'error';
    }
    if (level === messageLevels.success || success) {
        return 'accent';
    }
    if (level === messageLevels.warning || warning) {
        return 'warning';
    }

    return 'primary';
};

const getRootDynamicStyle = (props: MessageRootPropsType) => {
    const level = getColorNameByMessageLevel(props);

    return css`
        border-color: ${color(`${level}.main`)};
    `;
};

/** 👉 ROOT ELEMENT */
export const MessageRoot = styled.div.withConfig(propsBlocker)<
    MessageRootPropsType
>`
    ${typography('paragraphMedium')};
    box-sizing: border-box;
    border: 1px solid ${color('primary.main')};
    display: flex;
    justify-content: space-between;
    position: relative;

    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};

    padding-left: ${spacing(4)};
    padding-right: ${spacing(4)};

    ${getRootDynamicStyle};
    ${getComponentOverride('Message')};
    ${marginAttributes};
`;

export const MessageCentral = styled.div.withConfig(propsBlocker)<
    MessageCentralPropsType
>`
    flex-grow: 1;
    align-self: center;
    display: flex;
`;

export const MessageContent = styled.div.withConfig(propsBlocker)<
    MessageContentPropsType
>`
    flex-grow: 1;
    line-height: 1.3;
    color: ${color('neutral.11')};

    padding-top: ${spacing(4)};
    padding-bottom: ${spacing(4)};
`;

export const MessageActions = styled.div.withConfig(propsBlocker)<
    MessageActionsPropsType
>`
    flex-shrink: 0;
    align-self: center;

    margin-left: ${spacing(4)};
    padding-top: ${spacing(1)};
    padding-bottom: ${spacing(1)};
`;

export const MessageExtra = styled.div.withConfig(propsBlocker)<
    MessageExtraPropsType
>`
    flex-shrink: 0;

    margin-left: ${spacing(4)};
    padding-top: ${spacing(2)};
    padding-bottom: ${spacing(2)};
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
        color: ${color(`${level}.main`)};
    `;
};

export const MessageIcon = styled(MessageIconWrapper)<MessageIconPropsType>`
    flex: 0 0 auto;

    font-size: ${pixelToRem(24)};

    margin-right: ${spacing(2)};
    padding-top: ${spacing(4)};
    padding-bottom: ${spacing(4)};

    ${getIconDynamicStyle};
`;

export const MessageCloseButton = styled.a.withConfig(propsBlocker)<
    MessageCloseButtonPropsType
>`
    flex: 0 0 auto;
    cursor: pointer;
    ${noTextInteraction};

    color: ${color('neutral.07')};
    font-size: ${pixelToRem(fontSize03)};

    padding-top: ${spacing(5)};
    padding-left: ${spacing(2)};
    padding-bottom: ${spacing(4)};
    line-height: normal;
`;
