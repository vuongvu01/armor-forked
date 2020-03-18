import { ThemeType } from '../../themes';
import { ScalarType } from '../../type';

export type SizingAttributesType = {
    width?: ScalarType;
    minWidth?: ScalarType;
    maxWidth?: ScalarType;
    height?: ScalarType;
    minHeight?: ScalarType;
    maxHeight?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & SizingAttributesType;

const makeCSS = (
    theme: ThemeType,
    cssParameter: string,
    value?: ScalarType,
) => {
    if (typeof value !== 'undefined') {
        return `${cssParameter}: ${theme.spacing(value)};`;
    }

    return '';
};

export const sizingAttributes = ({
    theme,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
}: PropertiesType) => `
    ${makeCSS(theme, 'width', width)}
    ${makeCSS(theme, 'min-width', minWidth)}
    ${makeCSS(theme, 'max-width', maxWidth)}
    ${makeCSS(theme, 'height', height)}
    ${makeCSS(theme, 'min-height', minHeight)}
    ${makeCSS(theme, 'max-height', maxHeight)}
`;
