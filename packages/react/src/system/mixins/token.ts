import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const token = (name: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = (theme.armor || theme) as ThemeType;
        const prefixedTokenName = `$${name}`; // todo: when get rid of theme.ts, remove also "$"
        if (prefixedTokenName in currentTheme.referenceIndex) {
            return currentTheme.referenceIndex[prefixedTokenName];
        }

        return name;
    }

    return name;
};
