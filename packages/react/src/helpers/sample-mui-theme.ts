// eslint-disable-next-line import/no-extraneous-dependencies
import { createMuiTheme } from '@material-ui/core/styles';
import { ObjectLiteralType } from '../type';
import { makeTheme } from '../styling';

const declaration = {
    palette: {
        common: { black: 'rgba(52, 59, 70, 1)', white: '#fff' },
        background: { paper: '#fff', default: '#fafafa' },
        primary: {
            light: 'rgba(117, 117, 117, 1)',
            main: 'rgba(52, 59, 70, 1)',
            dark: 'rgba(33, 33, 33, 1)',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgba(229, 115, 115, 1)',
            main: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: 'rgba(211, 47, 47, 1)',
            dark: 'rgba(198, 45, 45, 1)',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(33, 33, 33, 1)',
            secondary: 'rgba(52, 59, 70, 1)',
            disabled: 'rgba(117, 117, 117, 1)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
};

export const theme = createMuiTheme(declaration);

export const makeHybridTheme = (
    mixin: ObjectLiteralType,
    parameters: ObjectLiteralType,
) =>
    makeTheme(
        createMuiTheme({
            ...declaration,
            ...mixin,
        }),
        parameters,
    );
