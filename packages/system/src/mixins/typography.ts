import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const typography =
    (variantName: string) =>
    ({ theme }: PropsWithThemeType) => {
        const currentTheme = getAvailableTheme(theme);

        const variant = currentTheme.typography?.[variantName];
        if (variant) {
            return {
                ...variant,
                fontFamily: `${variant.fontFamily}, sans-serif`,
                fontSize: currentTheme.typography.pixelToRem(variant.fontSize),
                lineHeight: currentTheme.typography.pixelToRem(
                    variant.lineHeight,
                ),
            };
        }

        return '';
    };

export const typographyInherit = () => ({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
});
