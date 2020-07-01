import styled, { css } from 'styled-components';

import { marginAttributes } from 'src/system';
import { SVGIconRootPropsType } from './type';

export const SVGIconRoot = styled.svg<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
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
