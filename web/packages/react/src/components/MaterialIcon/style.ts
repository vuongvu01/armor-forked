import styled from 'styled-components';
import { MaterialIconPropsType } from './type';
import { marginAttributes } from '../../system/attributes';

export const MaterialIconRoot = styled.span<MaterialIconPropsType>`
    font-family: 'Material Icons', serif;
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
    flex-shrink: 0;
    user-select: none;
    line-height: 1;
    font-weight: normal;
    font-style: normal;
    font-size: ${({ fontSize, theme }) =>
        theme.typography.pixelToRem(fontSize)};
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    ${marginAttributes}
`;
