import { ThemeType } from '../../styling';
import { ScalarType } from '../../type';

export type SizeAttributesType = {
    width?: ScalarType;
    minWidth?: ScalarType;
    maxWidth?: ScalarType;
    height?: ScalarType;
    minHeight?: ScalarType;
    maxHeight?: ScalarType;
};

type PropertiesType = { theme: ThemeType } & SizeAttributesType;

const makeCSS = (
    theme: ThemeType,
    cssParameter: string,
    value?: ScalarType,
) => {
    if (typeof value !== 'undefined') {
        return `${cssParameter}: ${theme.span(value)};`;
    }

    return '';
};

export const sizeAttributes = ({
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
