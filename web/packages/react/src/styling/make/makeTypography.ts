import { TypographyInputType, TypographyType } from '../type';
import { fontSizeRegular, fontSizeHTML } from '../../tokens';

const makeTypography = (
    typography: TypographyInputType = {},
): TypographyType => {
    const fontSize = typography.fontSize || fontSizeRegular;
    const htmlFontSize = typography.htmlFontSize || fontSizeHTML;
    const factor = fontSize / fontSizeRegular;
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

export default makeTypography;
