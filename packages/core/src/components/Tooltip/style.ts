import styled, { css } from 'styled-components';
import {
    widthProps,
    zIndex,
    getComponentOverride,
    propsBlocker,
    popperArrow,
    popperArrowPlacement,
    typography,
    token,
    spacing,
    color,
    transition,
    borderRadius,
    reset,
} from '@deliveryhero/armor-system';

import { TooltipArrowPropsType, TooltipRootPropsType } from './type';

const getRootStyle = ({ error }: TooltipRootPropsType) => {
    if (error) {
        return css`
            color: ${color('neutral.00')};
            background-color: ${color('error.08')};
        `;
    }

    return css`
        color: ${color('neutral.00')};
        background-color: ${color('neutral.11')};
    `;
};

const getArrowStyle = ({ error }: TooltipArrowPropsType) => {
    if (error) {
        return css`
            &:before {
                background-color: ${color('error.08')};
            }
        `;
    }

    return css`
        &:before {
            background-color: ${color('neutral.11')};
        }
    `;
};

const getSizeStyle = ({ small }: TooltipRootPropsType) => {
    if (small) {
        return css`
            padding: ${spacing(1, 2)};
        `;
    }

    return css`
        padding: ${spacing(2, 3)};
    `;
};

/** 👉 ROOT ELEMENT */
export const TooltipRoot = styled.div.withConfig(
    propsBlocker,
)<TooltipRootPropsType>`
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    ${transition({ opacity: true })};
    ${popperArrowPlacement('Tooltip-Arrow')};
    ${typography('paragraphSmall')};
    color: ${token('body.color')};
    border-radius: ${borderRadius('soft')};
    ${zIndex};
    ${getRootStyle};
    ${getSizeStyle};
    ${getComponentOverride('Tooltip')};
    ${widthProps};
`;

export const TooltipContainer = styled.div.withConfig(propsBlocker)`
    .Tooltip-Container {
        ${transition({ opacity: true })};
    }
    .Tooltip-Container.enter {
        opacity: 0;
    }
    .Tooltip-Container.enter-active {
        opacity: 1;
    }
    .Tooltip-Container.exit {
        opacity: 1;
    }
    .Tooltip-Container.exit-active {
        opacity: 0;
    }
`;

export const TooltipArrow = styled.div.withConfig(
    propsBlocker,
)<TooltipArrowPropsType>`
    ${popperArrow};
    ${getArrowStyle};
`;

export const TriggerWrapper = styled.div.withConfig(propsBlocker)`
    ${reset}

    display: inline-block;

    & > * {
        pointer-events: none;
    }
`;
