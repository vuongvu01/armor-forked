import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type MarginAttributesType = {
    margin?: ScalarType;
    marginTop?: ScalarType;
    marginBottom?: ScalarType;
    marginLeft?: ScalarType;
    marginRight?: ScalarType;
    marginX?: ScalarType; // TODO (nmelnikov 2020-07-17): may be we should consider renaming these as marginHorizontal and marginVertical
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
        result += `margin: ${theme.span(margin)};`;
    }
    if (typeof marginTop !== 'undefined') {
        result += `margin-top: ${theme.span(marginTop)};`;
    }
    if (typeof marginBottom !== 'undefined') {
        result += `margin-bottom: ${theme.span(marginBottom)};`;
    }
    if (typeof marginLeft !== 'undefined') {
        result += `margin-left: ${theme.span(marginLeft)};`;
    }
    if (typeof marginRight !== 'undefined') {
        result += `margin-right: ${theme.span(marginRight)};`;
    }
    if (typeof marginX !== 'undefined') {
        const value = theme.span(marginX);
        result += `margin-right: ${value}; margin-left: ${value};`;
    }
    if (typeof marginY !== 'undefined') {
        const value = theme.span(marginY);
        result += `margin-top: ${value}; margin-bottom: ${value};`;
    }

    return result;
};
