import { PropsWithThemeType } from './type';
import { ThemeType } from '../theme';
import { getAvailableTheme } from '../theme/util';

export const borderRadius =
    (radius: string) =>
    ({ theme }: PropsWithThemeType): string => {
        const currentTheme = getAvailableTheme(theme);

        if (radius in currentTheme.shape.borderRadius) {
            return (
                currentTheme.shape.borderRadius[
                    radius as keyof ThemeType['shape']['borderRadius']
                ] ?? ''
            );
        }

        return radius;
    };
