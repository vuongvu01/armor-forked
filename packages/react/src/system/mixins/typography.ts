import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const typography = (style: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        if (currentTheme.typography) {
            const variant = currentTheme.typography[style];
            if (variant) {
                return {
                    ...variant,
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
