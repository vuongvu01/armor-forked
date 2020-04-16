import deepFreeze from 'deep-freeze-strict';
import merge from 'deepmerge';
import { ThemeDeclarationType, ThemeFabricOptions, ThemeType } from '../type';
import { makeBreakpoints } from './make-breakpoints';
import { makeTypography } from './make-typography';
import { makeSpan } from './make-span';
import { defaultThemeDeclaration } from '../themes/defaultThemeDeclaration';
import { transformTheme } from './transform-theme';

const overwriteMerge = (destinationArray: any[], sourceArray: any[]) =>
    sourceArray;

export const makeTheme = (
    declaration: ThemeDeclarationType,
    options?: ThemeFabricOptions,
): ThemeType => {
    const immutable = !options || (options && options.immutable !== false);

    const theme = merge(defaultThemeDeclaration, declaration, {
        arrayMerge: overwriteMerge,
    }) as ThemeDeclarationType;

    theme.span = makeSpan(theme.span);
    theme.breakpoints = makeBreakpoints(theme.breakpoints);
    theme.typography = makeTypography(theme.typography);

    transformTheme(theme as ThemeType);

    return (immutable ? deepFreeze(theme) : theme) as ThemeType;
};
