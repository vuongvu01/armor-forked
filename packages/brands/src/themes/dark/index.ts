import {
    makeTheme,
    colorBlue05,
    colorBlue10,
    colorBlue20,
    colorBlue40,
    colorGreen10,
    colorGreen20,
    colorGrey01,
    colorGrey30,
    colorGrey40,
    colorGrey60,
    colorGrey70,
    colorGrey80,
    colorGrey90,
    colorRed10,
    colorRed50,
    colorRed60,
    colorRed70,
    colorTurquoise60,
    colorTurquoise70,
    colorTurquoise80,
    colorTurquoise90,
    colorYellow10,
    colorYellow60,
} from '@deliveryhero/armor-system';

import { darkThemeComponentOverrides } from './components';

export const darkThemeStructure = {
    body: {
        color: colorGrey01,
        backgroundColor: colorGrey80,
    },
    color: {
        primary: {
            dark: colorBlue40,
            main: colorBlue20,
            light: colorBlue10,
            lighter: colorBlue20,
            lightest: colorBlue05,
        },
        accent: {
            darker: colorTurquoise90,
            dark: colorTurquoise80,
            main: colorTurquoise70,
            light: colorTurquoise60,
        },
        success: {
            main: colorGreen20,
            light: colorGreen10,
        },
        warning: {
            main: colorYellow60,
            light: colorYellow10,
        },
        error: {
            dark: colorRed70,
            main: colorRed60,
            light: colorRed50,
            lighter: colorRed10,
        },
        neutral: {
            '00': colorGrey90,
            '01': colorGrey80,
            '02': colorGrey70,
            '03': colorGrey60,
            '04': colorGrey30,
            '05': colorGrey40,
            '06': colorGrey01,
        },
        illustration: {
            brand: colorBlue40,
        },
        motion: {
            brand: colorBlue20,
        },
    },

    componentCSS: darkThemeComponentOverrides,
};

export const makeDarkTheme = () => makeTheme({ armor: darkThemeStructure });
