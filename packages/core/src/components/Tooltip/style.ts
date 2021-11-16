import styled, { Interpolation } from 'styled-components';
import {
    widthProps,
    zIndex,
    getComponentOverride,
    propsBlocker,
    popperArrow,
    popperArrowPlacement,
    durationNormal,
} from '@deliveryhero/armor-system';

import { TooltipArrowPropsType, TooltipRootPropsType } from './type';

const getDynamicStyle = (
    element: string,
    { error, theme }: TooltipRootPropsType | TooltipArrowPropsType,
): Interpolation<any> => {
    const {
        componentOverrides: { Tooltip },
    } = theme;

    if (error) {
        return Tooltip[element].error;
    }

    return Tooltip[element].normal;
};

const getRootStyle = (props: TooltipRootPropsType) =>
    getDynamicStyle('Root', props);

const getArrowStyle = (props: TooltipArrowPropsType) =>
    getDynamicStyle('Arrow', props);

const sizeStyle = ({ small, theme }: TooltipRootPropsType) => {
    const {
        componentOverrides: { Tooltip },
    } = theme;

    if (small) {
        return Tooltip.Root.small;
    }

    return '';
};

/** 👉 ROOT ELEMENT */
export const TooltipRoot = styled.div.withConfig(propsBlocker)<
    TooltipRootPropsType
>`
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
    transition: opacity ${durationNormal}ms ease;
    pointer-events: none;

    ${popperArrowPlacement('Tooltip-Arrow')};

    ${({ theme }) => theme.componentOverrides.Tooltip.Root.base};
    ${zIndex};
    ${getRootStyle};
    ${sizeStyle};
    ${getComponentOverride('Tooltip')};
    ${widthProps};
`;

export const TooltipArrow = styled.div.withConfig(propsBlocker)<
    TooltipArrowPropsType
>`
    ${popperArrow};
    ${({ theme }) => theme.componentOverrides.Tooltip.Arrow.base};
    ${getArrowStyle};
`;
