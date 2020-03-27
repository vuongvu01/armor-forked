import { TypographyInputType, TypographyType } from '../type';

export const makeTypography = (
    typography: TypographyInputType = {},
): TypographyType => {
    const fontSize = typography.fontSize || 14;
    const htmlFontSize = typography.htmlFontSize || 16;
    const factor = fontSize / 14;
    return {
        ...typography,
        fontFamily: typography.fontFamily || 'Roboto, sans-serif',
        fontSize,
        htmlFontSize,
        pxToRem: size => `${(size / htmlFontSize) * factor}rem`,
    };
};
