import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const borderRadius = (radius: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        if (radius in currentTheme.shape.borderRadius) {
            return currentTheme.shape.borderRadius[radius];
        }

        return radius;
    }

    return radius;
};
