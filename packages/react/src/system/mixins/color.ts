import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const color = (name: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        const prefixedColorName = `$color.${name}`;
        if (prefixedColorName in currentTheme.referenceIndex) {
            return currentTheme.referenceIndex[prefixedColorName];
        }

        return name;
    }

    return name;
};
