import { makeTheme } from './make-theme';

export const darkTheme = makeTheme({
    palette: {
        primary: '#3f51b5',
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
