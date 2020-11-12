import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const color = (name: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        return currentTheme.referenceIndex
            ? currentTheme.referenceIndex[`$color.${name}`]
            : null;
    }

    return name;
};
