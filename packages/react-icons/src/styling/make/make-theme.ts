import { ThemeDeclarationType, ThemeType } from '../type';
import { makeSpan } from './make-span';
import { defaultThemeDeclaration } from '../themes/defaultThemeDeclaration';

export const makeTheme = (): ThemeType => {
    const theme = defaultThemeDeclaration as ThemeDeclarationType;

    theme.span = makeSpan(theme);

    theme.referenceIndex = {};

    return theme as ThemeType;
};
