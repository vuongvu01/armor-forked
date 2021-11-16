import { PropsWithThemeType } from './type';

export const color = (name: string) => ({
    theme,
}: PropsWithThemeType): string => {
    if (theme) {
        // todo: use token() mixin here as a proxy
        const currentTheme = theme.armor || theme;
        const prefixedColorName = `$color.${name}`; // todo: when get rid of theme.ts, remove also "$"
        if (prefixedColorName in currentTheme.referenceIndex) {
            return currentTheme.referenceIndex[prefixedColorName] as string;
        }

        return name;
    }

    return name;
};
