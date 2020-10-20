import { RootThemeType, ThemeDeclarationType, ThemeType } from '../type';
import { makeSpacing } from './makeSpacing';
import { defaultThemeDeclaration } from '../themes/defaultThemeDeclaration';

export const makeTheme = (): RootThemeType => {
    const theme = defaultThemeDeclaration as ThemeDeclarationType;

    theme.spacing = makeSpacing(theme);

    theme.referenceIndex = {};

    return {
        armor: theme as ThemeType,
    };
};
