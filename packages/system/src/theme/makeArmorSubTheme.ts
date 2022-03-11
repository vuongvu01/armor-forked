import { flatten } from 'flat';
import { ThemeInputType, ThemeType } from './type';
import { merge } from '../util';
import { defaultThemeStructure } from './defaultThemeStructure';
import { makeSpacing } from './makeSpacing';
import { makeBreakpoints } from './makeBreakpoints';
import { makeTypography } from './makeTypography';
import { makeCompatibility } from './makeCompatibility';

export const makeArmorSubTheme = (
    declaration: ThemeInputType = {},
): ThemeType => {
    const theme = merge(defaultThemeStructure, declaration) as ThemeType;

    theme.spacing = makeSpacing(theme);
    theme.breakpoints = makeBreakpoints(theme);
    theme.typography = makeTypography(theme);
    makeCompatibility(theme);

    theme.referenceIndex = flatten({
        body: theme.body,
        shape: theme.shape,
        typography: theme.typography,
        color: theme.color,
        elevation: theme.elevation,
        transition: theme.transition,
    }) as Record<string, unknown>;

    theme.$initialized = true;

    return theme;
};
