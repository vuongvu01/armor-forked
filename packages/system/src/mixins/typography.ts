import { PropsWithThemeType } from './type';

export const typography = (style: string) => ({
    theme,
}: PropsWithThemeType) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        if (currentTheme.typography) {
            const variant = currentTheme.typography[style];
            if (variant) {
                return {
                    ...variant,
                    fontFamily: `${variant.fontFamily},sans-serif`,
                    fontSize: currentTheme.typography.pixelToRem(
                        variant.fontSize,
                    ),
                    lineHeight: currentTheme.typography.pixelToRem(
                        variant.lineHeight,
                    ),
                };
            }
        }
    }

    return style;
};
