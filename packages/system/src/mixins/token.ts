import { ThemeType } from '../theme';
import { PropsWithThemeType } from './type';

export const token = (name: string) => ({
    theme,
}: PropsWithThemeType): string => {
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
