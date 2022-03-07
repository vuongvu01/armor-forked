import { ThemePropertyType, ThemeType } from './type';
import { makeDefaultThemeCached } from './makeDefaultTheme';

export const getAvailableTheme = (theme: ThemePropertyType): ThemeType => {
    // todo: remove this in the next PR
    if (theme?.$initialized) {
        return theme as ThemeType;
    }
    if (!theme?.armor?.$initialized) {
        return makeDefaultThemeCached().armor;
    }

    return theme?.armor ?? makeDefaultThemeCached().armor;
};
