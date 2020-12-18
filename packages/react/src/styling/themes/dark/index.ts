import { makeTheme } from '../../theme/makeTheme';
import {
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
} from '../../../tokens';

import { darkThemeComponentOverrides } from './components';

export const makeDarkTheme = () =>
    makeTheme({
        armor: {
            body: {
                color: colorGrey01,
                backgroundColor: colorGrey80,
            },
            typography: {
                body: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                pageTitle: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                sectionTitle: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                subSectionTitle: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                labelLarge: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                labelMedium: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                labelSmall: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                paragraphLarge: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                paragraphMedium: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
                paragraphSmall: {
                    // todo: remove the color from here, typography should be color-agnostic
                    color: colorGrey01,
                },
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
            },

            // the name of this structure is temporary, rename it to "components" when theme.ts is removed everywhere
            __componentOverrides: darkThemeComponentOverrides,
        },
    });
