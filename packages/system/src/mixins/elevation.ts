import { PropsWithThemeType } from './type';

export const elevation = (level: string) => ({
    theme,
}: PropsWithThemeType): string => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        if (level in currentTheme.elevation) {
            return currentTheme.elevation[level];
        }

        return level;
    }

    return level;
};
