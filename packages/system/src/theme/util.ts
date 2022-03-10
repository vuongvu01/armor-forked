import { ThemePropertyType, ThemeType } from './type';
import { makeDefaultThemeCached } from './makeDefaultTheme';

export const getAvailableTheme = (theme: ThemePropertyType): ThemeType => {
    return theme?.armor ?? makeDefaultThemeCached().armor;
};
