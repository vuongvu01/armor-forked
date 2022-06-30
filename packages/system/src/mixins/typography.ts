import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const typography =
    (variantName: string) =>
    ({ theme }: PropsWithThemeType) => {
        const currentTheme = getAvailableTheme(theme);

        const variant = currentTheme.typography?.[variantName];

        if (!variant) {
            return '';
        }

        const { fontWeight, letterSpacing, lineHeight, fontFamily, fontSize } =
            variant;

        const { pixelToRem } = currentTheme.typography;

        return {
            fontFamily: `${fontFamily}, sans-serif`,
            fontSize: pixelToRem(fontSize),
            fontWeight,
            letterSpacing,
            lineHeight: pixelToRem(lineHeight),
        };
    };

export const typographyInherit = () => ({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
});
