import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    LinkRootPropsType,
    LinkTagPropsType,
    LinkLabelPropsType,
} from './type';
import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker, makePropList } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import {
    borderRadius,
    color,
    reset,
    spacing,
    pixelToRem,
} from '../../system/mixins';
import {
    fontSize02,
    fontSize03,
    fontSize04,
    fontFamilyRoboto,
} from '../../tokens';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'disabled',
    'small',
    'medium',
    'large',
    'pressed',
    'underline',
]);

const getRootStyle = ({
    small,
    medium,
    large,
    pressed,
    disabled,
    underline,
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
            color: ${color('neutral.04')};
            cursor: not-allowed;
            &:hover {
                color: ${color('neutral.04')};
            }
        `;
    }
    return result;
};

const LinkTagWrapper = ({
    children,
    ...restProps
}: LinkLabelPropsType & {
    children: (props: LinkTagPropsType) => ReactElement;
}) => children(restProps);

export const LinkRoot = styled(LinkTagWrapper).withConfig(
    getPropsBlocker(propertyList),
)<LinkRootPropsType>`
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
        color: ${color('purple.05')};
    }
    &:hover {
        color: ${color('primary.light')};
    }
    ${getRootStyle}
    ${marginAttributes}
    ${getComponentOverride('Link')};
`;
