import { ThemeType } from '../../themes';
import { ScalarType } from '../../type';

export type SpacingOuterAttributesType = {
    margin?: ScalarType;
    marginTop?: ScalarType;
    marginBottom?: ScalarType;
    marginLeft?: ScalarType;
    marginRight?: ScalarType;
    marginX?: ScalarType;
    marginY?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & SpacingOuterAttributesType;

export const spacingOuterAttributes = ({
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
