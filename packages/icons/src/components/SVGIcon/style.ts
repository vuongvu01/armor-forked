import styled, { css } from 'styled-components';
import {
    marginProps,
    colorProps,
    propsBlocker,
} from '@deliveryhero/armor-system';

import { SVGIconRootPropsType } from './type';

const getSizingStyles = ({ theme, fontSize }: SVGIconRootPropsType) => {
    const defaultFontSize = css`
        font-size: inherit;
    `;

    if (!theme) {
        return defaultFontSize;
    }

    const {
        typography: { pixelToRem },
    } = theme.armor;

    if (fontSize) {
        return css`
            font-size: ${pixelToRem(fontSize)};
        `;
    }

    return defaultFontSize;
};

export const SVGIconRoot = styled.svg.withConfig(
    propsBlocker,
)<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    line-height: inherit;
    box-sizing: content-box;
    fill: currentColor;
    vertical-align: middle;
    ${({ iconWidth, iconHeight, display }) => css<SVGIconRootPropsType>`
        display: ${display};
        width: ${iconWidth};
        height: ${iconHeight};
    `};
    ${getSizingStyles};
    ${colorProps};
    ${marginProps};
`;
