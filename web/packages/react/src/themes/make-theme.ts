import deepFreeze from 'deep-freeze-strict';
import cloneDeep from 'clone-deep';
import {
    BreakpointsDeclarationType,
    BreakpointsType,
    ThemeDeclarationType,
    ThemeType,
} from './type';
import {
    grid,
    cell,
    align,
    breakpointUp,
    breakpointDown,
    breakpointOnly,
    breakpointBetween,
    forwardBreakpoints,
    forwardBreakpointsTwoArgs,
} from '../system';

const makeBreakpoints = (
    breakpoints?: BreakpointsDeclarationType,
): BreakpointsType => {
    const {
        values = {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    } = breakpoints || {};

    const base = {
        values,
        keys: Object.keys(values),
    };

    return {
        ...base,
        up: forwardBreakpoints(base, breakpointUp),
        down: forwardBreakpoints(base, breakpointDown),
        only: forwardBreakpoints(base, breakpointOnly),
        between: forwardBreakpointsTwoArgs(base, breakpointBetween),
    };
};

// todo: declaration could be a function like (theme) => newTheme, where theme is some other theme that we override.
// todo: the usage will be then like this: const theme = makeTheme((theme) => ({...theme, something: 'blah'}), otherTheme);
// todo: if there is no second argument, then the defaultTheme is used
// todo: make it MUI compatible: https://material-ui.com/customization/default-theme/
export const makeTheme = (declaration: ThemeDeclarationType): ThemeType => {
    const theme = cloneDeep(declaration);

    // todo: make it available to use theme.spacing({sm: X, md: Y, lg: Z})
    // todo: move spacing function fabric somewhere else
    if ('spacing' in theme) {
        if (typeof theme.spacing === 'number') {
            theme.spacingFactor = theme.spacing;
            theme.spacing = value => {
                if (typeof value === 'string') {
                    return value;
                }

                return `${value * theme.spacingFactor}px`;
            };
        }
    } else {
        theme.spacingFactor = 1;
        theme.spacing = value => {
            if (typeof value === 'string') {
                return value;
            }
            return `${value}px`;
        };
    }

    theme.breakpoints = makeBreakpoints(theme.breakpoints);

    theme.mixins = theme.mixins || {};

    // todo: fix these helpers arguments
    theme.mixins.grid = () => grid();
    theme.mixins.cell = () => cell();
    theme.mixins.align = () => align();

    // todo: deal with this
    theme.palette = theme.palette || {};
    theme.shape = theme.shape || {};
    theme.shadows = theme.shadows || [];
    theme.typography = theme.typography || {};
    theme.zIndex = theme.zIndex || {};

    return deepFreeze(theme) as ThemeType;
};
