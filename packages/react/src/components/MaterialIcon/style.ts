import styled from 'styled-components';

import { marginAttributes, propsBlocker } from '../../system';
import { MaterialIconPropsType } from './type';

export const MaterialIconRoot = styled.span.withConfig(propsBlocker)<
    MaterialIconPropsType
>`
    font-family: 'Material Icons', serif;
    display: inline-block;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
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
