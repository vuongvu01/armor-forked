import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const elevation = (level: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        if (level in currentTheme.elevation) {
            return currentTheme.elevation[level];
        }

        return level;
    }

    return level;
};
