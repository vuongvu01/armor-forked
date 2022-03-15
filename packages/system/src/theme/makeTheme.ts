import { RootThemeInputType, RootThemeType } from './type';
import { makeArmorSubTheme } from './makeArmorSubTheme';

export const makeTheme = (
    declaration: RootThemeInputType = {},
): RootThemeType => {
    return {
        ...declaration,
        armor: makeArmorSubTheme(declaration.armor),
    };
};
