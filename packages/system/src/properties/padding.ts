import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { CSSChunkType, ScalarType } from '../type';
import { spacing } from '../mixins';

export type PaddingPropsType = Partial<{
    /**
     * Sets CSS `padding` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    padding: ScalarType;
    /**
     * Sets CSS `padding-top` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingTop: ScalarType;
    /**
     * Sets CSS `padding-bottom` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingBottom: ScalarType;
    /**
     * Sets CSS `padding-left` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingLeft: ScalarType;
    /**
     * Sets CSS `padding-right` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingRight: ScalarType;
    /**
     * Sets CSS `padding-left` and `padding-right` properties of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingX: ScalarType;
    /**
     * Sets CSS `padding-top` and `padding-bottom` properties of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group padding
     */
    paddingY: ScalarType;
}>;

export const paddingProps = ({
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
}: PaddingPropsType): CSSChunkType => {
    let result = css`` as FlattenInterpolation<ThemeProps<any>>;

    if (typeof padding !== 'undefined') {
        result = css`
            ${result};
            padding: ${spacing(padding)};
        `;
    }
    if (typeof paddingTop !== 'undefined') {
        result = css`
            ${result};
            padding-top: ${spacing(paddingTop)};
        `;
    }
    if (typeof paddingBottom !== 'undefined') {
        result = css`
            ${result};
            padding-bottom: ${spacing(paddingBottom)};
        `;
    }
    if (typeof paddingLeft !== 'undefined') {
        result = css`
            ${result};
            padding-left: ${spacing(paddingLeft)};
        `;
    }
    if (typeof paddingRight !== 'undefined') {
        result = css`
            ${result};
            padding-right: ${spacing(paddingRight)};
        `;
    }
    if (typeof paddingX !== 'undefined') {
        const value = spacing(paddingX);
        result = css`
            ${result};
            padding-right: ${value};
            padding-left: ${value};
        `;
    }
    if (typeof paddingY !== 'undefined') {
        const value = spacing(paddingY);
        result = css`
            ${result};
            padding-top: ${value};
            padding-bottom: ${value};
        `;
    }

    return result;
};
