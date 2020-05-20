import { ReactElement } from 'react';
import styled from 'styled-components';
import { MessageActionRootPropsType } from './type';
import { marginAttributes } from '../../system/attributes';

const Wrapper = ({
    className,
    children,
}: {
    className: string;
    children: (className: string) => ReactElement;
}) => children(className);

export const MessageActionRoot = styled(Wrapper)<MessageActionRootPropsType>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    ${({ theme }: MessageActionRootPropsType) =>
        theme.componentOverrides.MessageAction.Root.base}
    ${marginAttributes}
    ${(props: MessageActionRootPropsType) => props.styles(props)}
`;
