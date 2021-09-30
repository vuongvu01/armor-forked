import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import { ReactElement } from 'react';
import {
    MenuElementContentPropsType,
    MenuElementExpansionHandleArrowPropsType,
    MenuElementExpansionHandlePropsType,
    MenuElementRootPropsType,
} from './type';
import {
    color,
    marginAttributes,
    paddingAttributes,
    pixelToRem,
    propsBlocker,
    reset,
    spacing,
    typography,
    getComponentOverride,
} from '../../../system';
import { transitionDurationInSec } from '../../../constants';
import { fontSize02 } from '../../../tokens';

const MenuElementRootWrapper = ({
    children,
    ...restProps
}: MenuElementRootPropsType & {
    children: (props: MenuElementRootPropsType) => ReactElement;
}) => children({ ...restProps });

const getRootStyle = ({
    enableExpansionHandle,
    secondary,
    tertiary,
    selected,
    small,
}: MenuElementRootPropsType) => {
    const borderWidth = small ? 0.5 : 1;

    let result = css`
        &:hover {
            background-color: ${color('primary.lightest')};
            &:before {
                width: ${spacing(borderWidth)};
            }
        }
    `;

    if (secondary) {
        result = css`
            ${result};
            ${typography('paragraphLarge')};
            padding-left: ${spacing(16)};
            background-color: ${color('neutral.01')};
        `;
    } else if (tertiary) {
        result = css`
            ${result};
            ${typography('paragraphLarge')};
            padding-left: ${spacing(20)};
            background-color: ${color('neutral.01')};
        `;
    }

    if (enableExpansionHandle) {
        result = css`
            ${result};
            padding-right: 0;
        `;
    }

    // only "top-level" menu element can be small
    if (small && !secondary && !tertiary) {
        result = css`
            ${result};
            font-size: ${pixelToRem(fontSize02)};
            padding-left: ${spacing(4)};
            padding-right: ${spacing(4)};
        `;
    }

    if (selected) {
        result = css`
            ${result};
            &:before {
                width: ${spacing(borderWidth)};
            }
            background-color: ${color('primary.lightest')};
        `;
    }

    return result;
};

export const MenuElementRoot = styled(MenuElementRootWrapper).withConfig(
    propsBlocker,
)<MenuElementRootPropsType>`
    ${reset};
    ${typography('labelLarge')};
    padding-left: ${spacing(6)};
    padding-right: ${spacing(6)};
    display: flex;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    color: ${color('neutral.11')};
    background-color: ${color('neutral.00')};

    transition: background-color ${transitionDurationInSec}s ease;
    &:before {
        background-color: ${color('primary.main')};
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 0;
    }

    ${getRootStyle};
    ${getComponentOverride('MenuElement')};
    ${marginAttributes};
    ${paddingAttributes};
`;

const getContentStyle = ({ small }: MenuElementContentPropsType) => {
    const spacingY = small ? 2 : 4;
    return css`
        padding-top: ${spacing(spacingY)};
        padding-bottom: ${spacing(spacingY)};
    `;
};

export const MenuElementContent = styled.div.withConfig(propsBlocker)<
    MenuElementContentPropsType
>`
    flex-grow: 1;
    display: flex;

    ${getContentStyle};
`;

export const MenuElementExpansionHandle = styled.div.withConfig(propsBlocker)<
    MenuElementExpansionHandlePropsType
>`
    display: flex;
    align-self: stretch;
    cursor: pointer;
    padding: ${spacing(4)};
`;
