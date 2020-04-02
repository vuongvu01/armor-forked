import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type PaddingAttributesType = {
    padding?: ScalarType;
    paddingTop?: ScalarType;
    paddingBottom?: ScalarType;
    paddingLeft?: ScalarType;
    paddingRight?: ScalarType;
    paddingX?: ScalarType;
    paddingY?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & PaddingAttributesType;

export const paddingAttributes = ({
    theme,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
}: PropertiesType) => {
    let result = '';

    if (typeof padding !== 'undefined') {
        result += `padding: ${theme.span(padding)};`;
    }
    if (typeof paddingTop !== 'undefined') {
        result += `padding-top: ${theme.span(paddingTop)};`;
    }
    if (typeof paddingBottom !== 'undefined') {
        result += `padding-bottom: ${theme.span(paddingBottom)};`;
    }
    if (typeof paddingLeft !== 'undefined') {
        result += `padding-left: ${theme.span(paddingLeft)};`;
    }
    if (typeof paddingRight !== 'undefined') {
        result += `padding-right: ${theme.span(paddingRight)};`;
    }
    if (typeof paddingX !== 'undefined') {
        const value = theme.span(paddingX);
        result += `padding-right: ${value}; padding-left: ${value};`;
    }
    if (typeof paddingY !== 'undefined') {
        const value = theme.span(paddingY);
        result += `padding-top: ${value}; padding-bottom: ${value};`;
    }

    return result;
};
