import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type MarginAttributesType = {
    /**
     * @armor-docs-group margin
     */
    margin?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginTop?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginBottom?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginLeft?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginRight?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginX?: ScalarType;
    /**
     * @armor-docs-group margin
     */
    marginY?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & MarginAttributesType;

export const marginAttributesList = {
    margin: true,
    marginTop: true,
    marginBottom: true,
    marginLeft: true,
    marginRight: true,
    marginX: true,
    marginY: true,
};

export const marginAttributes = ({
    theme,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
}: PropertiesType) => {
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
