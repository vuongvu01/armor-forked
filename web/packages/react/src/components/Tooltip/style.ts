import styled, { css, Interpolation } from 'styled-components';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';
import { TooltipArrowPropsType, TooltipRootPropsType } from './type';

const propertyList = {
    align: true,
    hidden: true,
    dark: true,
    small: true,
    // add other custom properties here
} as ObjectLiteralType;

const visualStyle = (
    element: string,
    { dark, theme }: TooltipRootPropsType | TooltipArrowPropsType,
): Interpolation<any> => {
    const {
        componentOverrides: { Tooltip },
    } = theme;

    if (dark) {
        return Tooltip[element].dark;
    }

    return Tooltip[element].normal;
};

const visualStyleRoot = (props: TooltipRootPropsType) =>
    visualStyle('Root', props);

const visualStyleArrow = (props: TooltipArrowPropsType) =>
    visualStyle('Arrow', props);

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
    transition: opacity 200ms ease;
    pointer-events: none;

    &[data-popper-placement^='top'] > .Tooltip-Arrow {
        bottom: -8px;
    }
    &[data-popper-placement^='bottom'] > .Tooltip-Arrow {
        top: -8px;
    }

    ${({ theme }) => theme.componentOverrides.Tooltip.Root.base}
    ${visualStyleRoot}
    ${sizeStyle}
    ${(props: TooltipRootPropsType) => props.styles(props)}
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
        transform: translateX(${props =>
            props.hide ? 10 : 0}px) rotate(45deg);
        transform-origin: center;
    }

    ${({ theme }) => theme.componentOverrides.Tooltip.Arrow.base}
    ${visualStyleArrow}
    ${(props: TooltipArrowPropsType) => props.styles(props)}
`;
