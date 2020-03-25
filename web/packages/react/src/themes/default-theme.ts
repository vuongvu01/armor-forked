import { makeTheme } from './make-theme';
import {
    blue200,
    green100,
    green200,
    grey300,
    white,
    shadow100,
    blue300,
} from '../tokens';

export const defaultTheme = makeTheme({
    typography: {
        fontFamily: 'Roboto-Medium, sans-serif',
    },
    palette: {
        primary: {
            main: blue200,
            dark: blue300,
            contrastText: white,
        },
        secondary: {
            main: green100,
            contrastText: green200,
        },
        tertiary: {
            main: blue200,
            contrastText: grey300,
        },
    },
    shape: {
        borderRadius: '2px',
    },
    shadows: [shadow100],
    spacing: 4,
});
