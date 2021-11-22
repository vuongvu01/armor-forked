import { ThemeType } from '../theme';
import { CSSChunkType, ScalarType } from '../type';

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

type PropertiesType = { theme: ThemeType } & PaddingPropsType;

export const paddingProps = ({
    theme,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
}: PropertiesType): CSSChunkType => {
    let result = '';

    if (typeof padding !== 'undefined') {
        result += `padding: ${theme.spacing(padding)};`;
    }
    if (typeof paddingTop !== 'undefined') {
        result += `padding-top: ${theme.spacing(paddingTop)};`;
    }
    if (typeof paddingBottom !== 'undefined') {
        result += `padding-bottom: ${theme.spacing(paddingBottom)};`;
    }
    if (typeof paddingLeft !== 'undefined') {
        result += `padding-left: ${theme.spacing(paddingLeft)};`;
    }
    if (typeof paddingRight !== 'undefined') {
        result += `padding-right: ${theme.spacing(paddingRight)};`;
    }
    if (typeof paddingX !== 'undefined') {
        const value = theme.spacing(paddingX);
        result += `padding-right: ${value}; padding-left: ${value};`;
    }
    if (typeof paddingY !== 'undefined') {
        const value = theme.spacing(paddingY);
        result += `padding-top: ${value}; padding-bottom: ${value};`;
    }

    return result;
};
