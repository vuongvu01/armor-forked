import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import {
    borderRadius,
    color,
    spacing,
    marginAttributes,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import { mouseCursor } from '../../styling';
import { TabLabelPropsType, TabRootPropsType } from './type';
import { transitionDurationInSec } from '../../constants';
import { Typography } from '../Typography';

const animationStyle = ({
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) =>
    isActive ? Tab.Root.active__after : 'position: relative;';

const tabRootStyle = ({ isActive, wide }: TabRootPropsType) => {
    let result = css``;

    if (isActive) {
        result = css`
            ${result};
            transform: scaleX(1);
            transition: all ${transitionDurationInSec}s ease;
        `;
    }

    if (wide) {
        result = css`
            ${result};
            flex-grow: 1;
        `;
    }

    return result;
};

const tabRootAfterStyle = ({
    theme: {
        componentOverrides: { Tab },
    },
}: TabRootPropsType) => Tab.Root.after;

const tabLabelStyle = ({
    disabled,
    isActive,
    theme: {
        componentOverrides: { Tab },
    },
    wide,
}: TabLabelPropsType) => {
    let result = css`
        padding: ${spacing(1)} ${spacing(6)};
        color: ${color('neutral.05')};
        border-radius: ${borderRadius('sharp')};
    `;

    if (wide) {
        result = css`
            ${result};
            justify-content: center;
        `;
    }

    if (disabled) {
        return css`
            ${result};
            ${Tab.Label.disabled}
        `;
    }

    if (isActive) {
        return css`
            ${result};
            ${Tab.Label.active}
        `;
    }

    if (!isActive) {
        return css`
            ${result};
            ${Tab.Label.hover}
        `;
    }

    return result;
};

const tabLabelContainerStyle = ({ disabled }: TabLabelPropsType) =>
    disabled
        ? css`
              cursor: not-allowed;
          `
        : '';

const cursor = ({ disabled, isActive }: TabRootPropsType) => {
    if (disabled) {
        return css`
            pointer-events: none;
        `;
    }

    if (isActive) {
        return css`
            cursor: default;
        `;
    }

    return mouseCursor;
};

export const TabRoot = styled.div.withConfig(propsBlocker)<TabRootPropsType>`
    &::after {
        content: '';
        height: 3px;
        position: absolute;
        transform: scaleX(0);
        transition: transform ${transitionDurationInSec}s ease-out;
        width: auto;

        ${tabRootAfterStyle}
        ${animationStyle}
    }

    ${tabRootStyle}
    ${getComponentOverride('Tab')};
`;

const TabLabelTagWrapper = ({
    children,
    ...restProps
}: TabLabelPropsType & {
    children: (props: TabLabelPropsType) => ReactElement;
}) => children(restProps);

export const TabLabelContainer = styled(TabLabelTagWrapper)<TabLabelPropsType>`
    text-decoration: none;
    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
    }

    ${tabLabelContainerStyle};
`;

export const TabLabel = styled(Typography)<TabLabelPropsType>`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    display: flex;

    ${tabLabelStyle};
    ${marginAttributes};
    ${cursor};
`;
