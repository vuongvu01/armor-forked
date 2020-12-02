import { ObjectLiteralType, ScalarType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const borderRadius = (name: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        const prefixedBorderRadius = `$shape.borderRadius.${name}`;
        if (prefixedBorderRadius in currentTheme.referenceIndex) {
            return currentTheme.referenceIndex[prefixedBorderRadius];
        }
    }

    return name;
};
