/** Level 2 tokens */

import {
    fontSizeHTML,
    fontSizeRegular,
    borderRadiusNormal,
    spanRegular,
    fontFamilyRoboto,
    red300,
    grey00,
    grey70,
    grey50,
    grey20,
    grey10,
    grey05,
    grey01,
    blue60,
    blue20,
    blue05,
    blue70,
    blue80,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: fontSizeHTML,
        fontSize: fontSizeRegular,
        fontFamily: fontFamilyRoboto,
    },
    color: {
        primary: {
            lighter: blue05,
            light: blue20,
            main: blue60,
            dark: blue70,
            darker: blue80,
            contrast: grey00,
        },
        danger: {
            lighter: '#FAEAEB',
            light: '#F6D5D5',
            main: red300,
            dark: red300,
            darker: red300,
            contrast: grey00,
        },
        text: {
            main: '#050505',
        },
        background: {
            main: grey00,
        },
        neutral: {
            '00': grey00,
            '01': grey01,
            '02': grey05,
            '03': grey10,
            '04': grey20,
            '05': grey50,
            '06': grey70,
        },
    },
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: spanRegular,
    componentOverrides: {},
    components: {},
};
