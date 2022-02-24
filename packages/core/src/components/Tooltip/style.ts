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
} from '@deliveryhero/armor-system';

import { TooltipArrowPropsType, TooltipRootPropsType } from './type';

const getRootStyle = ({ error }: TooltipRootPropsType) => {
    if (error) {
        return css`
            color: ${color('neutral.00')};
            background-color: ${color('error.main')};
        `;
    }

    return css`
        color: ${color('neutral.07')};
        background-color: ${color('neutral.00')};
    `;
};

const getArrowStyle = ({ error }: TooltipArrowPropsType) => {
    if (error) {
        return css`
            &:before {
                background-color: ${color('error.main')};
            }
        `;
    }

    return css`
        &:before {
            background-color: ${color('neutral.00')};
        }
    `;
};

const getSizeStyle = ({ small }: TooltipRootPropsType) => {
    if (small) {
        return css`
            padding: ${spacing(2)};
        `;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const TooltipRoot = styled.div.withConfig(
    propsBlocker,
)<TooltipRootPropsType>`
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
    ${transition({ opacity: true })};
    pointer-events: none;
    ${popperArrowPlacement('Tooltip-Arrow')};
    ${typography('paragraphMedium')};
    border-radius: ${token('shape.borderRadius.soft')};
    padding: ${spacing(3)};
    ${zIndex};
    ${getRootStyle};
    ${getSizeStyle};
    ${getComponentOverride('Tooltip')};
    ${widthProps};
`;

export const TooltipArrow = styled.div.withConfig(
    propsBlocker,
)<TooltipArrowPropsType>`
    ${popperArrow};
    ${getArrowStyle};
`;
