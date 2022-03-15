import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { CSSChunkType, ScalarType } from '../type';
import { spacing } from '../mixins';

export type MarginPropsType = Partial<{
    /**
     * Sets CSS `margin` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    margin: ScalarType;
    /**
     * Sets CSS `margin-top` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginTop: ScalarType;
    /**
     * Sets CSS `margin-bottom` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginBottom: ScalarType;
    /**
     * Sets CSS `margin-left` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginLeft: ScalarType;
    /**
     * Sets CSS `margin-right` property of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginRight: ScalarType;
    /**
     * Sets CSS `margin-left` and `margin-right` properties of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginX: ScalarType;
    /**
     * Sets CSS `margin-top` and `margin-bottom` properties of the **.#COMPONENT_NAME#-Root** element. If a number is passed, it will be converted to an actual *CSS value* using `spacing()` function.
     * @armor-docs-group margin
     */
    marginY: ScalarType;
}>;

export const marginProps = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
}: MarginPropsType): CSSChunkType => {
    let result = css`` as FlattenInterpolation<ThemeProps<any>>;

    if (typeof margin !== 'undefined') {
        result = css`
            ${result};
            margin: ${spacing(margin)};
        `;
    }
    if (typeof marginTop !== 'undefined') {
        result = css`
            ${result};
            margin-top: ${spacing(marginTop)};
        `;
    }
    if (typeof marginBottom !== 'undefined') {
        result = css`
            ${result};
            margin-bottom: ${spacing(marginBottom)};
        `;
    }
    if (typeof marginLeft !== 'undefined') {
        result = css`
            ${result};
            margin-left: ${spacing(marginLeft)};
        `;
    }
    if (typeof marginRight !== 'undefined') {
        result = css`
            ${result};
            margin-right: ${spacing(marginRight)};
        `;
    }
    if (typeof marginX !== 'undefined') {
        const value = spacing(marginX);
        result = css`
            ${result};
            margin-right: ${value};
            margin-left: ${value};
        `;
    }
    if (typeof marginY !== 'undefined') {
        const value = spacing(marginY);
        result = css`
            ${result};
            margin-top: ${value};
            margin-bottom: ${value};
        `;
    }

    return result;
};
