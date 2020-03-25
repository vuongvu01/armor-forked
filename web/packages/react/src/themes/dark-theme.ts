import { makeTheme } from './make-theme';

export const darkTheme = makeTheme({
    palette: {
        primary: {
            main: '#3f51b5',
            contrastText: '',
        },
        secondary: 'red',
        backgroundColor: '#000',
        contrastText: '#aa0000',
        common: {
            white: '#fff',
            black: '#000',
        },
    },
    shape: {
        borderRadius: '2px',
    },
    spacing: 4,
});
