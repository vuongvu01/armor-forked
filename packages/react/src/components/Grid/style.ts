import styled, { css } from 'styled-components';

import { GridPropsType } from './type';
import { ThemeType } from '../../styling';
import { propsBlocker, sizeAttributes } from '../../system';

export const setHorizontalMargin = (
    value: number,
    spacing: ThemeType['spacing'],
) => {
    const marginValue = spacing(value);
    return css`
        margin-right: calc(${marginValue} * 0.5);
        margin-left: calc(${marginValue} * 0.5);
    `;
};

export const setVerticalMargin = (
    value: number,
    spacing: ThemeType['spacing'],
) => {
    const marginValue = spacing(value);
    return css`
        margin-top: calc(${marginValue} * 0.5);
        margin-bottom: calc(${marginValue} * 0.5);
    `;
};

const gridRootStyle = ({
    gutterSpacing,
    gutterSpacingVertical,
    gutterSpacingHorizontal,
    theme: { spacing },
}: GridPropsType & { theme: ThemeType }) => {
    let result = {};

    const gutterSpacingX = gutterSpacingHorizontal || gutterSpacing;
    const gutterSpacingY = gutterSpacingVertical || gutterSpacing;

    if (gutterSpacingX && gutterSpacingX > 0) {
        result = css`
            ${result};
            ${setHorizontalMargin(-gutterSpacingX, spacing)};
        `;
    }

    if (gutterSpacingY && gutterSpacingY > 0) {
        result = css`
            ${result};
            ${setVerticalMargin(-gutterSpacingY, spacing)};
        `;
    }

    return result;
};

export const GridRoot = styled.div.withConfig(propsBlocker)<GridPropsType>`
    display: flex;
    flex-wrap: wrap;
    ${gridRootStyle};
    ${sizeAttributes};
`;
