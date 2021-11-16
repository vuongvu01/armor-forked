import { ReactElement } from 'react';
import styled from 'styled-components';
import { marginProps, propsBlocker } from '@deliveryhero/armor-system';

import { MessageActionRootPropsType } from './type';

const Wrapper = ({
    children,
    ...restProps
}: MessageActionRootPropsType & {
    children: (props: MessageActionRootPropsType) => ReactElement;
}) => children({ ...restProps });

/** 👉 ROOT ELEMENT */
export const MessageActionRoot = styled(Wrapper).withConfig(propsBlocker)<
    MessageActionRootPropsType
>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    ${({ theme }: MessageActionRootPropsType) =>
        theme.componentOverrides.MessageAction.Root.base}
    ${marginProps};
`;
