import styled, { css, Interpolation } from 'styled-components';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';
import { TooltipArrowPropsType, TooltipRootPropsType } from './type';
import { transitionDurationInSec } from '../../constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

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

export const TooltipRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TooltipRootPropsType>`
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    visibility: hidden;
    opacity: 1;
    ${({ hidden }) =>
        hidden
            ? css`
                  opacity: 0;
              `
            : ''};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.12);
    transition: opacity ${transitionDurationInSec}s ease;
    pointer-events: none;

    &[data-popper-placement^='top'] > .Tooltip-Arrow {
        bottom: -8px;
    }
    &[data-popper-placement^='bottom'] > .Tooltip-Arrow {
        top: -8px;
    }

    ${({ theme }) => theme.componentOverrides.Tooltip.Root.base}
    ${getRootDynamicStyle}
    ${sizeStyle}
    ${getComponentOverride('Tooltip')};
`;

export const TooltipArrow = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TooltipArrowPropsType>`
    height: 16px;
    width: 16px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        width: 10px;
        height: 10px;
        content: '';
        transition: transform 200s ease-out;
        visibility: ${props => (props.hide ? 'hidden' : 'visible')};
        transform: translateX(${props => (props.hide ? 10 : 0)}px) rotate(45deg);
        transform-origin: center;
    }

    ${({ theme }) => theme.componentOverrides.Tooltip.Arrow.base}
    ${getArrowDynamicStyle}
`;
