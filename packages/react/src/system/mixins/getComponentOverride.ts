import { ObjectLiteralType } from '../../type';
import { RootThemeType, ThemeType } from '../../styling';

export const getComponentOverride = (componentName: string) => ({
    theme,
}: ObjectLiteralType & { theme?: ThemeType | RootThemeType }) => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        // this structure is temporary, rename it to "components" when theme.ts is removed everywhere
        if (currentTheme?.__componentOverrides) {
            return currentTheme?.__componentOverrides[componentName];
        }

        // this structure is temporary, rename it to "components" when theme.ts is removed everywhere
        if (currentTheme?.componentOverrides) {
            return currentTheme?.componentOverrides[componentName];
        }

        // todo: use just currentTheme.components here
    }

    return null;
};
