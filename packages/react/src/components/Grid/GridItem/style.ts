import styled, { css } from 'styled-components';

import { shouldForwardProp } from '../../../utils';
import { ObjectLiteralType } from '../../../type';
import { GridItemPropsType, GridSizeType } from './type';
import { GRID_RESOLUTION } from '../constants';
import { BreakpointCodeType } from '../../../system/mixins/type';
import { setHorizontalMargin, setVerticalMargin } from '../style';
import { ThemeType } from '../../../styling';

const propertyList = {} as ObjectLiteralType;

const setMediaStyle = (
    size: GridSizeType,
    spacing: ThemeType['spacing'],
    gutterSpacingX?: number,
) => {
    // if (typeof code === 'number') {

    const width = (100 / GRID_RESOLUTION) * size;

    if (gutterSpacingX && gutterSpacingX > 0) {
        return css`
            width: calc(${width}% - ${spacing(gutterSpacingX)});
        `;
    }

    return css`
        width: ${width}%;
    `;
    // }

    // todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
    // if (typeof code === 'boolean') {
    //     return code
    //         ? css`
    //               flex-basis: 0;
    //               flex-grow: 1;
    //               max-width: 100%;
    //           `
    //         : '';
    // }

    // todo: discuss the real purpose of this (width: auto), because it seems to be defeating the 12-column concept
    // return css`
    //     width: ${code};
    // `;
};

const gridItemRootStyle = ({
    gutterSpacing,
    gutterSpacingVertical,
    gutterSpacingHorizontal,
    theme: {
        breakpoints,
        componentOverrides: { GridItem },
        spacing,
    },
    ...restProps
}: GridItemPropsType & { theme: ThemeType }) => {
    let result = GridItem.Root.base;

    const gutterSpacingX = gutterSpacingHorizontal || gutterSpacing;
    const gutterSpacingY = gutterSpacingVertical || gutterSpacing;

    if (gutterSpacingX && gutterSpacingX > 0) {
        result = css`
            ${result};
            ${setHorizontalMargin(gutterSpacingX, spacing)}
        `;
    }

    if (gutterSpacingY && gutterSpacingY > 0) {
        result = css`
            ${result};
            ${setVerticalMargin(gutterSpacingY, spacing)}
        `;
    }

    breakpoints.keys.forEach((key: BreakpointCodeType) => {
        if (restProps[key]) {
            result = css`
                ${result};
                ${breakpoints.up(key)} {
                    ${setMediaStyle(restProps[key]!, spacing, gutterSpacingX)}
                }
            `;
        }
    });

    return result;
};

export const GridItemRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<GridItemPropsType>`
    box-sizing: border-box;
    width: 100%;

    ${gridItemRootStyle}
`;
