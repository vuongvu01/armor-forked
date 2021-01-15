import styled, { css } from 'styled-components';

import { getPropsBlocker, makePropList } from '../../../utils';
import { GridItemPropsType, GridSizeType } from './type';
import { GRID_RESOLUTION } from '../constants';
import { BreakpointCodeType } from '../../../system/mixins/type';
import { setHorizontalMargin, setVerticalMargin } from '../style';
import { ThemeType } from '../../../styling';
import { paddingAttributes } from '../../../system/attributes';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'gutterSpacing',
    'gutterSpacingVertical',
    'gutterSpacingHorizontal',
    // todo: dont hard-code these props, they should be removed from restProps automatically
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
]);

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

export const GridItemRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<GridItemPropsType>`
    box-sizing: border-box;
    width: 100%;

    ${gridItemRootStyle}
    ${paddingAttributes}
`;
