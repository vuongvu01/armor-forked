import styled, { css } from 'styled-components';

import { GridItemPropsType, GridSizeType } from './type';
import { GRID_RESOLUTION } from '../constants';
import { setHorizontalMargin, setVerticalMargin } from '../style';
import { ThemeType } from '../../../styling';
import { BreakpointCodeType } from '../../../system/mixins/type';
import { paddingAttributes, propsBlocker } from '../../../system';

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
    theme: { breakpoints, spacing },
    ...restProps
}: GridItemPropsType & { theme: ThemeType }) => {
    let result = {};

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

    breakpoints.keys.forEach((key: string) => {
        if (restProps[key as BreakpointCodeType]) {
            result = css`
                ${result};
                ${breakpoints.up(key as BreakpointCodeType)} {
                    ${setMediaStyle(
                        restProps[key as BreakpointCodeType]!,
                        spacing,
                        gutterSpacingX,
                    )}
                }
            `;
        }
    });

    return result;
};

/** 👉 ROOT ELEMENT */
export const GridItemRoot = styled.div.withConfig(propsBlocker)<
    GridItemPropsType
>`
    box-sizing: border-box;
    width: 100%;

    ${gridItemRootStyle}
    ${paddingAttributes}
`;
