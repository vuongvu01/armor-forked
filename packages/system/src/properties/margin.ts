import { ThemeType } from '../theme';
import { CSSChunkType, ScalarType } from '../type';

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

type PropertiesType = { theme: ThemeType } & MarginPropsType;

export const marginProps = ({
    theme,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
}: PropertiesType): CSSChunkType => {
    let result = '';

    if (typeof margin !== 'undefined') {
        result += `margin: ${theme.spacing(margin)};`;
    }
    if (typeof marginTop !== 'undefined') {
        result += `margin-top: ${theme.spacing(marginTop)};`;
    }
    if (typeof marginBottom !== 'undefined') {
        result += `margin-bottom: ${theme.spacing(marginBottom)};`;
    }
    if (typeof marginLeft !== 'undefined') {
        result += `margin-left: ${theme.spacing(marginLeft)};`;
    }
    if (typeof marginRight !== 'undefined') {
        result += `margin-right: ${theme.spacing(marginRight)};`;
    }
    if (typeof marginX !== 'undefined') {
        const value = theme.spacing(marginX);
        result += `margin-right: ${value}; margin-left: ${value};`;
    }
    if (typeof marginY !== 'undefined') {
        const value = theme.spacing(marginY);
        result += `margin-top: ${value}; margin-bottom: ${value};`;
    }

    return result;
};
