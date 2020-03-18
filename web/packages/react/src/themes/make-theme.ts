import deepFreeze from 'deep-freeze-strict';
import cloneDeep from 'clone-deep';
import { ThemeDeclarationType, ThemeType } from './type';
import { grid, cell, align } from '../system';

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

    theme.mixins = theme.mixins || {};

    // todo: fix these helpers arguments
    theme.mixins.grid = () => grid();
    theme.mixins.cell = () => cell();
    theme.mixins.align = () => align();

    // todo: deal with this
    theme.breakpoints = theme.breakpoints || { values: {} };
    theme.palette = theme.palette || {};
    theme.shape = theme.shape || {};
    theme.shadows = theme.shadows || [];
    theme.typography = theme.typography || {};
    theme.zIndex = theme.zIndex || {};

    return deepFreeze(theme) as ThemeType;
};
