import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes/margin';
import { SVGIconRootPropsType } from './type';
import { shouldForwardProp } from '../../utils';
import { pixelToRem } from '../../system/mixins/pixelToRem';

const propertyList = {
    fontSize: true,
    display: true,
    small: true,
    medium: true,
    large: true,
    width: true,
    height: true,
    iconWidth: true,
    iconHeight: true,
};

const getSizingStyles = ({
    theme,
    small,
    medium,
    large,
    iconHeight,
    iconWidth,
    fontSize,
}: SVGIconRootPropsType) => {
    if (!theme) {
        return `
            font-size: inherit;
        `;
    }

    if (small) {
        return `
            font-size: ${theme.typography.pixelToRem(12)};
            padding: ${theme.spacing(1.5)};
        `;
    }

    if (medium) {
        return `
            font-size: ${theme.typography.pixelToRem(16)};
            padding: ${theme.spacing(1)};
        `;
    }

    if (large) {
        return `
            font-size: ${theme.typography.pixelToRem(24)};
        `;
    }

    return `
        font-size: ${
            typeof fontSize !== 'undefined'
                ? theme.typography.pixelToRem(fontSize)
                : 'inherit'
        };
    `;
};

export const SVGIconRoot = styled.svg.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    line-height: inherit;
    ${({ iconWidth, iconHeight, display }) => css<SVGIconRootPropsType>`
        display: ${display};
        width: ${iconWidth};
        height: ${iconHeight};
    `}
    ${getSizingStyles}
    ${marginAttributes};
`;
