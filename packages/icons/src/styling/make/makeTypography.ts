import { TypographyInputType, TypographyType } from '../type';

export const makeTypography = (
    typography: TypographyInputType = {},
): TypographyType => {
    const fontSize = typography.fontSize || 14; // todo: use actual token here: fontSize02;
    const htmlFontSize = typography.htmlFontSize || 16; // todo: use actual token here: fontSize03;
    const factor = fontSize / 14; // todo: use actual token here: fontSize02;
    return {
        ...typography,
        fontFamily: typography.fontFamily || 'Roboto, sans-serif',
        fontSize,
        htmlFontSize,
        pixelToRem: size => {
            if (size === 0) {
                return '0';
            }

            if (typeof size === 'string') {
                return size;
            }

            return `${(size / htmlFontSize) * factor}rem`;
        },
    };
};
