import deepFreeze from 'deep-freeze-strict';
import { flatten } from 'flat';

import { merge } from 'src/utils';
import makeSpan from './makeSpan';
import makeBreakpoints from './makeBreakpoints';
import makeTypography from './makeTypography';
import { defaultThemeDeclaration } from '../themes/defaultThemeDeclaration';
import { ThemeDeclarationType, ThemeFabricOptions, ThemeType } from '../type';

const makeTheme = (
    declaration: ThemeDeclarationType,
    options?: ThemeFabricOptions,
): ThemeType => {
    const immutable = !options || (options && options.immutable !== false);

    const theme = merge(
        defaultThemeDeclaration,
        declaration,
    ) as ThemeDeclarationType;

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

export default makeTheme;
