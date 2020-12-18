import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const color = (name: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        // todo: use token() mixin here as a proxy
        const currentTheme = theme.armor || theme;
        const prefixedColorName = `$color.${name}`; // todo: when get rid of theme.ts, remove also "$"
        if (prefixedColorName in currentTheme.referenceIndex) {
            return currentTheme.referenceIndex[prefixedColorName];
        }

        return name;
    }

    return name;
};
