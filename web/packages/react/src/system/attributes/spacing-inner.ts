import { ThemeType } from '../../themes';
import { ScalarType } from '../../type';

export type SpacingInnerAttributesType = {
    padding?: ScalarType;
    paddingTop?: ScalarType;
    paddingBottom?: ScalarType;
    paddingLeft?: ScalarType;
    paddingRight?: ScalarType;
    paddingX?: ScalarType;
    paddingY?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & SpacingInnerAttributesType;

export const spacingInnerAttributes = ({
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
