import {
    blue200,
    green100,
    green200,
    grey300,
    white,
    blue300,
    fontSizeRegular,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: 16,
        fontSize: fontSizeRegular,
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
    figure: {
        borderRadius: '2px',
    },
    span: 4,
};
