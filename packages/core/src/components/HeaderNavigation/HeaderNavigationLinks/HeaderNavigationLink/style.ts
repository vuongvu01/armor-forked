import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { getComponentOverride, propsBlocker } from '@deliveryhero/armor-system';

import { HeaderNavigationLinkRootPropsType } from './type';

const HeaderNavigationLinkRootWrapper = ({
    children,
    ...restProps
}: HeaderNavigationLinkRootPropsType & {
    children: (props: HeaderNavigationLinkRootPropsType) => ReactElement;
}) => children({ ...restProps });

const navigationLinkRootStyle = ({
    isActive,
    theme: {
        componentOverrides: { HeaderNavigationLink },
    },
}: HeaderNavigationLinkRootPropsType) => {
    let result = HeaderNavigationLink.Root.base;

    if (isActive) {
        result = css`
            ${result};
            position: relative;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
            }
            ${HeaderNavigationLink.Root.active}
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationLinkRoot = styled(
    HeaderNavigationLinkRootWrapper,
).withConfig(propsBlocker)`
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    display: inline-flex;

    text-decoration: none;
    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
    }

    ${navigationLinkRootStyle};
    ${getComponentOverride('HeaderNavigationLink')};
    background-color: transparent;
`;
