import { ReactElement } from 'react';
import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    focus,
    token,
    color,
    pixelToRemToken,
} from '@deliveryhero/armor-system';

import { MessageActionRootPropsType } from './type';

const Wrapper = ({
    children,
    ...restProps
}: MessageActionRootPropsType & {
    children: (props: MessageActionRootPropsType) => ReactElement;
}) => children({ ...restProps });

/** 👉 ROOT ELEMENT */
export const MessageActionRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<MessageActionRootPropsType>`
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    ${focus()};
    font-family: ${token('typography.paragraphMedium.fontFamily')}, serif;
    font-weight: ${token('typography.labelMedium.fontWeight')};
    font-size: ${pixelToRemToken('typography.paragraphMedium.fontSize')};
    color: ${color('primary.main')};
    ${marginProps};
`;
