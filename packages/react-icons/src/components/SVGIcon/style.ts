import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes/margin';
import { SVGIconRootPropsType } from './type';

export const SVGIconRoot = styled.svg<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    line-height: inherit;
    ${({ iconWidth, iconHeight, fontSize, theme, display }) => css<
        SVGIconRootPropsType
    >`
        display: ${display};
        width: ${iconWidth};
        height: ${iconHeight};
        font-size: ${typeof fontSize !== 'undefined'
            ? theme.typography.pixelToRem(fontSize)
            : 'inherit'};
    `}
    ${marginAttributes}
`;
