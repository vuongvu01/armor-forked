import styled, { css, Interpolation } from 'styled-components';
import { ObjectLiteralType } from '../../type';
import { getPropsBlocker } from '../../utils';
import { TooltipArrowPropsType, TooltipRootPropsType } from './type';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { popperArrow, popperArrowPlacement } from '../../utils/popper';

const propertyList = {
    align: true,
    hidden: true,
    error: true,
    small: true,
    // add other custom properties here
} as ObjectLiteralType;

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

const getRootDynamicStyle = (props: TooltipRootPropsType) =>
    getDynamicStyle('Root', props);

const getArrowDynamicStyle = (props: TooltipArrowPropsType) =>
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

export const TooltipRoot = styled.div.withConfig(getPropsBlocker(propertyList))<
    TooltipRootPropsType
>`
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);
    transition: opacity ${transitionDurationInSec}s ease;
    pointer-events: none;

    ${popperArrowPlacement('Tooltip-Arrow')};

    ${({ theme }) => theme.componentOverrides.Tooltip.Root.base};
    ${getRootDynamicStyle};
    ${sizeStyle};
    ${getComponentOverride('Tooltip')};
`;

export const TooltipArrow = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<TooltipArrowPropsType>`
    ${popperArrow()};
    ${({ theme }) => theme.componentOverrides.Tooltip.Arrow.base};
    ${getArrowDynamicStyle};
`;
