import { makeTheme } from './make-theme';

export const defaultTheme = makeTheme({
    palette: {
        primary: '#3f51b5',
        secondary: 'red',
        backgroundColor: '#000',
        contrastText: '#fff',
        common: {
            white: '#fff',
            black: '#000',
        },
    },
    shape: {
        borderRadius: '5px',
    },
    spacing: 8,
});
