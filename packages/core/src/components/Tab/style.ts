import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
    borderRadius,
    color,
    spacing,
    marginProps,
    getComponentOverride,
    propsBlocker,
    typography,
    textDecorationNone,
    transition,
    mouseCursor,
    durationNormal,
    focus,
} from '@deliveryhero/armor-system';

import { TabTagPropsType, TabRootPropsType, TabLabelPropsType } from './type';

const getTabRootStyle = ({ isActive, wide, disabled }: TabRootPropsType) => {
    let result = css`` as {};

    if (isActive) {
        result = css`
            ${result};
            transform: scaleX(1);
            ${transition({ transform: true })};
            &::after {
                background-color: ${color('primary.07')};
                transform: scaleX(1);
            }
        `;
    } else {
        result = css`
            ${result};
            &::after {
                position: relative;
            }
        `;
    }

    if (wide) {
        result = css`
            ${result};
            flex-grow: 1;
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            &::after {
                background-color: ${color('neutral.05')};
            }
        `;
    }

    return result;
};

const tabLabelStyle = ({ disabled, wide }: TabLabelPropsType) => {
    let result = css``;

    if (wide) {
        result = css`
            ${result};
            justify-content: center;
        `;
    }

    if (disabled) {
        return css`
            ${result};
            color: ${color('neutral.05')};
            &:hover {
                color: ${color('neutral.05')};
            }
        `;
    }

    return result;
};

const tabLabelContainerStyle = ({ disabled }: TabTagPropsType) =>
    disabled
        ? css`
              cursor: not-allowed;
          `
        : '';

/** 👉 ROOT ELEMENT */
export const TabRoot = styled.div.withConfig(propsBlocker)<TabRootPropsType>`
    &::after {
        content: '';
        height: 2px;
        border-radius: ${borderRadius('sharp')};
        position: absolute;
        transform: scaleX(0);
        transition: transform ${durationNormal}ms ease-out;
        width: auto;
        right: 0;
        left: 0;
    }
    ${getTabRootStyle};
    ${getComponentOverride('Tab')};
    ${({ disabled }) => focus({ disabled })};
    ${marginProps};
`;

const Wrapper = ({
    children,
    ...restProps
}: TabTagPropsType & {
    children: (props: TabTagPropsType) => ReactElement;
}) => children(restProps);

export const TabTagWrapper = styled(Wrapper).withConfig(
    propsBlocker,
)<TabTagPropsType>`
    ${textDecorationNone};
    ${tabLabelContainerStyle};
`;

export const TabLabel = styled.div<TabLabelPropsType>`
    ${typography('labelLarge')};
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    padding: ${spacing(1)} 0;
    color: ${color('neutral.11')};
    &:hover {
        color: ${color('primary.06')};
    }
    ${tabLabelStyle};
    ${mouseCursor};
    ${transition({ color: true })};
`;
