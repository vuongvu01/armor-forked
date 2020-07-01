/** Level 2 tokens */

import {
    borderRadiusNormal,
    fontFamilyRoboto,
    colorGrey00,
    colorGrey01,
    colorGrey05,
    colorGrey10,
    colorGrey30,
    colorGrey50,
    colorGrey90,
    colorBlue70,
    colorBlue60,
    colorBlue50,
    colorBlue20,
    colorBlue05,
    colorTurquoise90,
    colorTurquoise80,
    colorTurquoise70,
    colorTurquoise60,
    fontSize03,
    fontSize05,
    fontWeightMedium,
    fontSize04,
    letterSpacingSmall,
    fontWeightBold,
    letterSpacingMedium,
    letterSpacingLarge,
    letterSpacingNone,
    fontSize01,
    fontWeightRegular,
    fontSize02,
    lineHeight01,
    lineHeight02,
    lineHeight03,
    lineHeight04,
    lineHeight05,
    componentSpacing01,
} from 'src/tokens';

export const defaultThemeDeclaration = {
    typography: {
        body: {
            fontSize: fontSize03,
            fontWeight: fontWeightMedium,
            fontFamily: fontFamilyRoboto,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
            color: colorGrey90,
            backgroundColor: colorGrey00,
        },
        pageTitle: {
            fontSize: fontSize05,
            lineHeight: lineHeight05,
            letterSpacing: letterSpacingNone,
        },
        sectionTitle: {
            fontSize: fontSize04,
            lineHeight: lineHeight04,
        },
        subSectionTitle: {
            fontWeight: fontWeightBold,
        },
        labelLarge: {
            letterSpacing: letterSpacingMedium,
        },
        labelMedium: {
            lineHeight: lineHeight02,
            letterSpacing: letterSpacingLarge,
        },
        labelSmall: {
            fontSize: fontSize01,
            lineHeight: lineHeight01,
            letterSpacing: letterSpacingMedium,
        },
        paragraphLarge: {
            fontWeight: fontWeightRegular,
        },
        paragraphMedium: {
            fontSize: fontSize02,
            fontWeight: fontWeightRegular,
        },
        paragraphSmall: {
            fontSize: fontSize01,
            fontWeight: fontWeightRegular,
            lineHeight: lineHeight02,
            letterSpacing: letterSpacingLarge,
        },
    },
    color: {
        primary: {
            dark: colorBlue70,
            main: colorBlue60,
            light: colorBlue50,
            lighter: colorBlue20,
            lightest: colorBlue05,
        },
        accent: {
            darker: colorTurquoise90,
            dark: colorTurquoise80,
            main: colorTurquoise70,
            light: colorTurquoise60,
        },
        danger: {},
        neutral: {
            '00': colorGrey00,
            '01': colorGrey01,
            '02': colorGrey05,
            '03': colorGrey10,
            '04': colorGrey30,
            '05': colorGrey50,
            '06': colorGrey90,
        },
    },
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: componentSpacing01,
    componentOverrides: {},
    components: {},
};
