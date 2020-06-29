import { ReactElement } from 'react';
import styled from 'styled-components';

import { marginAttributes } from 'src/system';
import { ObjectLiteralType } from 'src/type';
import { shouldForwardProp } from 'src/utils';
import { MessageActionRootPropsType } from './type';

const propertyList = {
    tag: true,
    useMessageColor: true,
    // add other custom properties here
} as ObjectLiteralType;

const Wrapper = ({
    className,
    children,
}: {
    className: string;
    children: (className: string) => ReactElement;
}) => children(className);

export const MessageActionRoot = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<MessageActionRootPropsType>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    ${({ theme }: MessageActionRootPropsType) =>
        theme.componentOverrides.MessageAction.Root.base}
    ${marginAttributes}
    ${(props: MessageActionRootPropsType) => props.styles(props)}
`;
