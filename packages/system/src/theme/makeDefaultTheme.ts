import { makeTheme } from './makeTheme';
import { RootThemeType } from './type';

export const makeDefaultTheme = () => makeTheme();
export const makeLightTheme = makeDefaultTheme;

let defaultTheme: RootThemeType;

/**
 * @internal
 */
export const makeDefaultThemeCached = (): RootThemeType => {
    if (!defaultTheme) {
        defaultTheme = makeDefaultTheme();
    }

    return defaultTheme;
};
