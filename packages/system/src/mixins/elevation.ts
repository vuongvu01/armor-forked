import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const elevation =
    (level: string) =>
    ({ theme }: PropsWithThemeType): string => {
        const currentTheme = getAvailableTheme(theme);

        if (level in currentTheme.elevation) {
            return currentTheme.elevation[level];
        }

        return level;
    };
