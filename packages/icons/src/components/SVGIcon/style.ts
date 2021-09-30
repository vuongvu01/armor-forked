import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes/margin';
import { SVGIconRootPropsType } from './type';
import { colorAttributes } from '../../system/attributes/color';
import { propsBlocker } from '../../system/util/propForwarding';

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

export const SVGIconRoot = styled.svg.withConfig(propsBlocker)<
    SVGIconRootPropsType
>`
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
    ${colorAttributes};
    ${marginAttributes};
`;
