import { PropsWithThemeType } from './type';
import { getAvailableTheme } from '../theme/util';

export const getToken = (
    { theme }: PropsWithThemeType,
    name: string,
): string => {
    const currentTheme = getAvailableTheme(theme);

    if (name in currentTheme.referenceIndex) {
        return currentTheme.referenceIndex[name];
    }

    return name;
};

export const token =
    (name: string) =>
    (props: PropsWithThemeType): string =>
        getToken(props, name);
