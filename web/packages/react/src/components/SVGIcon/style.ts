import styled, { css } from 'styled-components';
import { SVGIconRootPropsType } from './type';
import { spanOuterAttributes } from '../../system/attributes';

export const SVGIconRoot = styled.svg<SVGIconRootPropsType>`
    flex-shrink: 0;
    user-select: none;
    display: inline-block;
    ${({ iconWidth, iconHeight, fontSize, theme }) => css<SVGIconRootPropsType>`
        width: ${iconWidth};
        height: ${iconHeight};
        font-size: ${typeof fontSize !== 'undefined'
            ? theme.typography.pixelToRem(fontSize)
            : 'inherit'};
    `}
    ${spanOuterAttributes}
`;
