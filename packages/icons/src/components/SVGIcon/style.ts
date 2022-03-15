import styled, { css } from 'styled-components';
import {
    marginProps,
    colorProps,
    propsBlocker,
} from '@deliveryhero/armor-system';

import { SVGIconRootPropsType } from './type';

const getSizingStyles = ({
    theme,
    small,
    medium,
    large,
    fontSize,
}: SVGIconRootPropsType) => {
    if (!theme) {
        return `
            font-size: inherit;
        `;
    }

    if (small) {
        return `
            font-size: ${theme.armor.typography.pixelToRem(12)};
            padding: ${theme.armor.spacing(1.5)};
        `;
    }

    if (medium) {
        return `
            font-size: ${theme.armor.typography.pixelToRem(16)};
            padding: ${theme.armor.spacing(1)};
        `;
    }

    if (large) {
        return `
            font-size: ${theme.armor.typography.pixelToRem(24)};
        `;
    }

    return `
        font-size: ${
            typeof fontSize !== 'undefined'
                ? theme.armor.typography.pixelToRem(fontSize)
                : 'inherit'
        };
    `;
};

export const SVGIconRoot = styled.svg.withConfig(
    propsBlocker,
)<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    line-height: inherit;
    box-sizing: content-box;
    fill: currentColor;
    ${({ iconWidth, iconHeight, display }) => css<SVGIconRootPropsType>`
        display: ${display};
        width: ${iconWidth};
        height: ${iconHeight};
    `};
    ${getSizingStyles};
    ${colorProps};
    ${marginProps};
`;
