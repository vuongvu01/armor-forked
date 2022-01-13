import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    borderRadius,
    color,
    reset,
    spacing,
    pixelToRem,
    propsBlocker,
    marginProps,
    getComponentOverride,
    ellipsis as ellipsisCSS,
    fontSize02,
    fontSize03,
    fontSize04,
    fontFamilyRoboto,
} from '@deliveryhero/armor-system';

import { LinkRootPropsType } from './type';

const getRootStyle = ({
    small,
    medium,
    large,
    pressed,
    disabled,
    underline,
    ellipsis,
}: LinkRootPropsType) => {
    let result = {};

    if (small) {
        result = css`
            ${result};
            font-size: ${pixelToRem(fontSize02)};
        `;
    } else if (medium) {
        result = css`
            ${result};
            font-size: ${pixelToRem(fontSize03)};
        `;
    } else if (large) {
        result = css`
            ${result};
            font-size: ${pixelToRem(fontSize04)};
        `;
    }

    if (pressed) {
        result = css`
            ${result};
            color: ${color('primary.dark')};
        `;
    }

    if (underline) {
        result = css`
            ${result};
            text-decoration: underline;
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
            cursor: not-allowed;
            &:hover {
                color: ${color('neutral.05')};
            }
        `;
    }

    if (ellipsis) {
        result = css`
            ${result};
            ${ellipsisCSS};
        `;
    }

    return result;
};

const LinkTagWrapper = ({
    children,
    ...restProps
}: LinkRootPropsType & {
    children: (props: LinkRootPropsType) => ReactElement;
}) => children(restProps);

/** 👉 ROOT ELEMENT */
export const LinkRoot = styled(LinkTagWrapper).withConfig(propsBlocker)<
    LinkRootPropsType
>`
    ${reset};
    font-family: ${fontFamilyRoboto};
    color: ${color('primary.main')};
    position: relative;
    text-decoration: none;
    letter-spacing: ${spacing(0.1)};
    line-height: ${spacing(5)};
    border: 0 none;
    &:focus {
        border: 1px solid ${color('primary.main')};
        border-radius: ${borderRadius('01')};
    }
    display: inline;
    cursor: pointer;
    &:visited {
        color: ${color('visited.05')};
    }
    &:hover {
        color: ${color('primary.light')};
    }
    ${getRootStyle};
    ${marginProps};
    ${getComponentOverride('Link')};
`;