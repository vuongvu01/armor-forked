import { ReactElement } from 'react';
import styled from 'styled-components';

import { marginAttributes } from '../../../system';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';
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

export const MessageActionRoot = styled(Wrapper).withConfig(
    getPropsBlocker(propertyList),
)<MessageActionRootPropsType>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    ${({ theme }: MessageActionRootPropsType) =>
        theme.componentOverrides.MessageAction.Root.base}
    ${marginAttributes}
`;
