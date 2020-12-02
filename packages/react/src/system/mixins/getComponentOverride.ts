import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const getComponentOverride = (componentName: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;
        if (currentTheme?.componentOverrides) {
            return currentTheme?.componentOverrides[componentName];
        }
    }

    return null;
};
