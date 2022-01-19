import styled, { css } from 'styled-components';
import {
    marginProps,
    colorProps,
    propsBlocker,
} from '@deliveryhero/armor-system';

import { SVGIllustrationRootPropsType } from './type';

export const SVGIllustrationRoot = styled.svg.withConfig(
    propsBlocker,
)<SVGIllustrationRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    line-height: inherit;
    box-sizing: content-box;
    fill: currentColor;
    ${({
        illustrationWidth,
        illustrationHeight,
        display,
    }) => css<SVGIllustrationRootPropsType>`
        display: ${display};
        width: ${illustrationWidth};
        height: ${illustrationHeight};
    `};
    ${colorProps};
    ${marginProps};
`;
