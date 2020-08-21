import styled from 'styled-components';

import { ReactElement } from 'react';
import { marginAttributes } from '../../system/attributes';
import { noTextInteraction } from '../../system/mixins';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';
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

const propertyList = {
    onClose: true,
    disableCloseButton: true,
    disableIcon: true,
    actions: true,
    extra: true,
    level: true,
    error: true,
    warning: true,
    info: true,
    success: true,
    // add other custom properties here
} as ObjectLiteralType;

const getLevelStyles = (
    nodeName: string,
    {
        theme,
        level,
        error,
        success,
        warning,
    }: MessageEffectivePropsLevelAndThemeType,
) => {
    const source = theme.componentOverrides.Message[nodeName];

    if (level === messageLevels.error || error) {
        return source.error;
    }
    if (level === messageLevels.success || success) {
        return source.success;
    }
    if (level === messageLevels.warning || warning) {
        return source.warning;
    }

    return source.info;
};

export const MessageRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MessageRootPropsType>`
    box-sizing: border-box;
    border: 1px solid transparent;
    display: flex;
    justify-content: space-between;
    position: relative;

    ${({ theme }: MessageRootPropsType) =>
        theme.componentOverrides.Message.Root.base}
    ${(props: MessageRootPropsType) => getLevelStyles('Root', props)}

    ${marginAttributes}
    ${(props: MessageRootPropsType) => props.styles(props)}
`;

export const MessageCentral = styled.div<MessageCentralPropsType>`
    flex-grow: 1;
    align-self: center;
    display: flex;

    ${({ theme }: MessageCentralPropsType) =>
        theme.componentOverrides.Message.Central.base}
    ${(props: MessageCentralPropsType) => props.styles(props)}
`;

export const MessageContent = styled.div<MessageContentPropsType>`
    flex-grow: 1;
    line-height: 1.3;

    ${({ theme }: MessageContentPropsType) =>
        theme.componentOverrides.Message.Content.base}
    ${(props: MessageContentPropsType) => props.styles(props)}
`;

export const MessageActions = styled.div<MessageActionsPropsType>`
    flex-shrink: 0;
    align-self: center;

    ${({ theme }: MessageActionsPropsType) =>
        theme.componentOverrides.Message.Actions.base}
`;

export const MessageExtra = styled.div<MessageExtraPropsType>`
    flex-shrink: 0;

    ${({ theme }: MessageExtraPropsType) =>
        theme.componentOverrides.Message.Extra.base}
`;

const MessageIconWrapper = ({
    children,
    ...restProps
}: MessageIconPropsType & {
    children: (props: MessageIconPropsType) => ReactElement;
}) => children({ ...restProps });

export const MessageIconStyle = styled(MessageIconWrapper)<
    MessageIconPropsType
>`
    flex: 0 0 auto;

    ${({ theme }: MessageIconPropsType) =>
        theme.componentOverrides.Message.Icon.base}
    ${(props: MessageRootPropsType) => getLevelStyles('Icon', props)}
`;

export const MessageCloseButton = styled.a<MessageCloseButtonPropsType>`
    flex: 0 0 auto;
    cursor: pointer;
    ${noTextInteraction};

    ${({ theme }: MessageCloseButtonPropsType) =>
        theme.componentOverrides.Message.CloseButton.base}
`;
