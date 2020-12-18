import { flatten } from 'flat';
import deepFreeze from 'deep-freeze-strict';
import { ThemeInputType, ThemeOptionsType, ThemeType } from '../type';
import { merge } from '../../utils';
import { defaultThemeStructure } from '../defaultThemeStructure';
import { makeSpacing } from './makeSpacing';
import { makeBreakpoints } from './makeBreakpoints';
import { makeTypography } from './makeTypography';
import { ObjectLiteralType } from '../../type';

export const makeArmorSubTheme = (
    declaration: ThemeInputType = {},
    options?: ThemeOptionsType,
): ThemeType => {
    const immutable = !options || (options && options.immutable !== false);

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
    }) as ObjectLiteralType;

    theme.referenceIndex = Object.keys(referenceIndex).reduce((result, key) => {
        return {
            [`$${key}`]: referenceIndex[key], // todo: when get rid of theme.ts, remove also "$"
            ...result,
        };
    }, {});

    theme.$initialized = true;

    return (immutable
        ? {
              ...deepFreeze(theme),
              componentOverrides: {},
          }
        : theme) as ThemeType;
};
