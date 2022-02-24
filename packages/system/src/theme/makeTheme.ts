import { RootThemeInputType, RootThemeType, ThemeOptionsType } from './type';
import { makeArmorSubTheme } from './makeArmorSubTheme';

export const makeTheme = (
    declaration: RootThemeInputType = {},
    options?: ThemeOptionsType,
): RootThemeType => {
    return {
        ...declaration,
        armor: makeArmorSubTheme(declaration.armor),
    };
};
