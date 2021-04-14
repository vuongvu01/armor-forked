import { ReactElement } from 'react';
import styled from 'styled-components';

import { marginAttributes, propsBlocker } from '../../../system';
import { MessageActionRootPropsType } from './type';

// const Wrapper = ({
//     className,
//     children,
// }: {
//     className: string;
//     children: (className: string) => ReactElement;
// }) => children(className);

const Wrapper = ({
    children,
    ...restProps
}: MessageActionRootPropsType & {
    children: (props: MessageActionRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const MessageActionRoot = styled(Wrapper).withConfig(propsBlocker)<
    MessageActionRootPropsType
>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    ${({ theme }: MessageActionRootPropsType) =>
        theme.componentOverrides.MessageAction.Root.base}
    ${marginAttributes}
`;
