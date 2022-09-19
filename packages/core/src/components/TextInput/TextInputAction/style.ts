import { ReactElement } from 'react';
import styled from 'styled-components';
import {
    marginProps,
    propsBlocker,
    focus,
    color,
    typography,
    mouseCursor,
} from '@deliveryhero/armor-system';

import { TextInputActionRootPropsType } from './type';

const Wrapper = ({
    children,
    ...restProps
}: TextInputActionRootPropsType & {
    children: (props: TextInputActionRootPropsType) => ReactElement;
}) => children({ ...restProps });

/** 👉 ROOT ELEMENT */
export const TextInputActionRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<TextInputActionRootPropsType>`
    display: inline-block;
    color: ${color('primary.main')};
    ${typography('paragraphMedium')};
    ${focus()};
    ${mouseCursor};
    ${marginProps};
`;
