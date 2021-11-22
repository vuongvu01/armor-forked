import { PropsWithThemeType } from './type';

export const borderRadius = (radius: string) => ({
    theme,
}: PropsWithThemeType): string => {
    if (theme) {
        const currentTheme = theme.armor || theme;

        if (radius in currentTheme.shape.borderRadius) {
            return currentTheme.shape.borderRadius[radius];
        }

        return radius;
    }

    return radius;
};
