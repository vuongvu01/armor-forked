import { ThemeType, TypographyType } from './type';
import { fontSize02, fontSize03 } from '../tokens';
import { ScalarType } from '../type';

export const makeTypography = (theme: ThemeType): TypographyType => {
    const { typography } = theme;

    const fontSize = typography.fontSize || fontSize02;
    const htmlFontSize = typography.htmlFontSize || fontSize03;
    const factor = fontSize / fontSize02;
    return {
        ...typography,
        fontFamily: typography.fontFamily || 'Roboto, sans-serif',
        fontSize,
        htmlFontSize,
        pixelToRem: (size: ScalarType) => {
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
