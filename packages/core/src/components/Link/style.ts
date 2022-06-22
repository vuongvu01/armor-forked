import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    borderRadius,
    color,
    reset,
    spacing,
    propsBlocker,
    marginProps,
    getComponentOverride,
    ellipsis as ellipsisCSS,
    typography,
    transition,
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

    result = css`
        font-family: ${fontFamilyRoboto};
    `;

    if (small) {
        result = css`
            ${result};
            ${typography('paragraphSmall')}
        `;
    } else if (medium) {
        result = css`
            ${result};
            ${typography('paragraphMedium')}
        `;
    } else if (large) {
        result = css`
            ${result};
            ${typography('paragraphLarge')}
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
export const LinkRoot = styled(LinkTagWrapper).withConfig(
    propsBlocker,
)<LinkRootPropsType>`
    ${reset};
    color: ${color('primary.main')};
    position: relative;
    text-decoration: none;
    letter-spacing: ${spacing(0.1)};
    line-height: ${spacing(5)};
    border: none;
    display: inline;
    cursor: pointer;
    height: fit-content;

    &:focus-visible {
        background-color: ${color('primary.02')};
        border-radius: ${borderRadius('soft')};
        outline: ${color('primary.02')} solid ${spacing(1)};
    }

    &:visited {
        color: ${color('visited.05')};
    }

    &:hover {
        color: ${color('primary.light')};
    }

    ${transition({
        'background-color': true,
        outline: true,
    })};
    ${getRootStyle};
    ${marginProps};
    ${getComponentOverride('Link')};
`;
