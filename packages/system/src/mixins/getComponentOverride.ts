import { PropsWithThemeType } from './type';

export const getComponentOverride = (componentName: string) => ({
    theme,
}: PropsWithThemeType) => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        const {
            __componentOverrides, // @deprecated
            componentOverrides, // @deprecated
            components,
        } = currentTheme;

        // @deprecated
        if (__componentOverrides && componentName in __componentOverrides) {
            return currentTheme?.__componentOverrides[componentName];
        }

        // @deprecated
        if (componentOverrides && componentName in componentOverrides) {
            return currentTheme?.componentOverrides[componentName];
        }

        if (components && componentName in components) {
            return currentTheme?.components[componentName];
        }
    }

    return null;
};
