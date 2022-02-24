import { flatten } from 'flat';
import { ThemeInputType, ThemeType } from './type';
import { merge } from '../util';
import { defaultThemeStructure } from './defaultThemeStructure';
import { makeSpacing } from './makeSpacing';
import { makeBreakpoints } from './makeBreakpoints';
import { makeTypography } from './makeTypography';

export const makeArmorSubTheme = (
    declaration: ThemeInputType = {},
): ThemeType => {
    const theme = merge(defaultThemeStructure, declaration) as ThemeInputType;

    theme.spacing = makeSpacing(theme);
    theme.breakpoints = makeBreakpoints(theme.breakpoints);
    theme.typography = makeTypography(theme.typography);

    const referenceIndex = flatten({
        body: theme.body,
        shape: theme.shape,
        typography: theme.typography,
        color: theme.color,
        elevation: theme.elevation,
        transition: theme.transition,
    }) as Record<string, unknown>;

    // todo: remove this
    theme.referenceIndex = Object.keys(referenceIndex).reduce((result, key) => {
        return {
            [`$${key}`]: referenceIndex[key], // todo: when get rid of theme.ts, remove also "$"
            ...result,
        };
    }, {});

    theme.$initialized = true; // todo: remove this

    return theme as ThemeType;
};
