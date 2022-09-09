import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
    color,
    getComponentOverride,
    propsBlocker,
    spacing,
    typography,
} from '@deliveryhero/armor-system';

import { HeaderNavigationLinkRootPropsType } from './type';

const HeaderNavigationLinkRootWrapper = ({
    children,
    ...restProps
}: HeaderNavigationLinkRootPropsType & {
    children: (props: HeaderNavigationLinkRootPropsType) => ReactElement;
}) => children({ ...restProps });

const getRootStyle = ({ isActive }: HeaderNavigationLinkRootPropsType) => {
    if (isActive) {
        return css`
            position: relative;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background-color: ${color('primary.main')};
            }
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationLinkRoot = styled(
    HeaderNavigationLinkRootWrapper,
).withConfig(propsBlocker)`
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    display: inline-flex;
    padding: ${spacing(3, 4)};
    text-decoration: none;
    color: ${color('neutral.11')};
    background-color: transparent;
    ${typography('paragraphMedium')};

    &:visited,
    &:active,
    &:focus,
    &:hover {
        text-decoration: none;
        color: ${color('neutral.11')};
    }

    &:hover {
        background-color: ${color('primary.lightest')};
    }

    ${getRootStyle};
    ${getComponentOverride('HeaderNavigationLink')};
`;
