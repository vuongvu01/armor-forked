import deepFreeze from 'deep-freeze-strict';
import { flatten } from 'flat';
import merge from 'deepmerge';
import { ThemeDeclarationType, ThemeFabricOptions, ThemeType } from '../type';
import { makeBreakpoints } from './make-breakpoints';
import { makeTypography } from './make-typography';
import { makeSpan } from './make-span';
import { defaultThemeDeclaration } from '../themes/defaultThemeDeclaration';

const overwriteMerge = (destinationArray: any[], sourceArray: any[]) =>
    sourceArray;

export const makeTheme = (
    declaration: ThemeDeclarationType,
    options?: ThemeFabricOptions,
): ThemeType => {
    const immutable = !options || (options && options.immutable !== false);

    const theme = merge(defaultThemeDeclaration, declaration || {}, {
        arrayMerge: overwriteMerge,
    }) as ThemeDeclarationType;

    theme.span = makeSpan(theme);
    theme.breakpoints = makeBreakpoints(theme.breakpoints);
    theme.typography = makeTypography(theme.typography);

    theme.referenceIndex = flatten({
        figure: theme.figure,
        typography: theme.typography,
        color: theme.color,
    });

    return (immutable
        ? {
              ...deepFreeze(theme),
              componentOverrides: {},
          }
        : theme) as ThemeType;
};
