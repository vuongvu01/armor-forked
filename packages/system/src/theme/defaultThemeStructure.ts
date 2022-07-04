/** Level 2 tokens */

import {
    borderRadius01,
    borderRadius02,
    borderRadius04,
    borderRadiusPill,
    boxShadowLarge,
    boxShadowMedium,
    boxShadowSmall,
    colorBlue05,
    colorBlue20,
    colorBlue50,
    colorBlue60,
    colorBlue70,
    colorGrey00,
    colorGrey01,
    colorGrey05,
    colorGrey10,
    colorGrey30,
    colorGrey50,
    colorGrey90,
    colorGreen60,
    colorGreen10,
    colorYellow10,
    colorYellow60,
    colorRed10,
    colorRed50,
    colorRed60,
    colorRed70,
    colorTurquoise60,
    colorTurquoise70,
    colorTurquoise80,
    colorTurquoise90,
    colorPurple50,
    colorPurple20,
    fontFamilyRoboto,
    fontSize01,
    fontSize02,
    fontSize03,
    fontSize04,
    fontSize05,
    fontWeightBold,
    fontWeightMedium,
    fontWeightRegular,
    letterSpacingLarge,
    letterSpacingMedium,
    letterSpacingNone,
    letterSpacingSmall,
    lineHeight01,
    lineHeight02,
    lineHeight03,
    lineHeight04,
    lineHeight05,
    colorGrey80,
    colorGrey70,
    colorGrey60,
    colorGrey40,
    colorGrey20,
    colorBlue10,
    colorBlue30,
    colorBlue40,
    colorBlue80,
    colorBlue90,
    colorTurquoise05,
    colorTurquoise10,
    colorTurquoise20,
    colorTurquoise30,
    colorTurquoise40,
    colorTurquoise50,
    colorGreen05,
    colorGreen20,
    colorGreen30,
    colorGreen40,
    colorGreen50,
    colorGreen70,
    colorGreen80,
    colorGreen90,
    colorRed05,
    colorRed20,
    colorRed30,
    colorRed40,
    colorRed80,
    colorRed90,
    colorYellow05,
    colorYellow20,
    colorYellow30,
    colorYellow40,
    colorYellow50,
    colorYellow70,
    colorYellow80,
    colorYellow90,
    durationNormal,
} from '../tokens';

import { SPACING_FACTOR } from './constants';

export const defaultThemeStructure = {
    body: {
        color: colorGrey90,
        backgroundColor: colorGrey01,
    },
    typography: {
        body: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
        },
        pageTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize05,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingNone,
            lineHeight: lineHeight05,
        },
        sectionTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize04,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight04,
        },
        subSectionTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightBold,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
        },
        labelLarge: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingMedium,
            lineHeight: lineHeight03,
        },
        labelMedium: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize02,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingLarge,
            lineHeight: lineHeight01,
        },
        labelSmall: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize01,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingMedium,
            lineHeight: lineHeight01,
        },
        paragraphLarge: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
        },
        paragraphMedium: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize02,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
        },
        paragraphSmall: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize01,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingLarge,
            lineHeight: lineHeight02,
        },
    },
    color: {
        primary: {
            '01': colorBlue05,
            '02': colorBlue10,
            '03': colorBlue20,
            '04': colorBlue30,
            '05': colorBlue40,
            '06': colorBlue50,
            '07': colorBlue60,
            '08': colorBlue70,
            '09': colorBlue80,
            '10': colorBlue90,
        },
        accent: {
            '01': colorTurquoise05,
            '02': colorTurquoise10,
            '03': colorTurquoise20,
            '04': colorTurquoise30,
            '05': colorTurquoise40,
            '06': colorTurquoise50,
            '07': colorTurquoise60,
            '08': colorTurquoise70,
            '09': colorTurquoise80,
            '10': colorTurquoise90,
        },
        success: {
            '01': colorGreen05,
            '02': colorGreen10,
            '03': colorGreen20,
            '04': colorGreen30,
            '05': colorGreen40,
            '06': colorGreen50,
            '07': colorGreen60,
            '08': colorGreen70,
            '09': colorGreen80,
            '10': colorGreen90,
        },
        warning: {
            '01': colorYellow05,
            '02': colorYellow10,
            '03': colorYellow20,
            '04': colorYellow30,
            '05': colorYellow40,
            '06': colorYellow50,
            '07': colorYellow60,
            '08': colorYellow70,
            '09': colorYellow80,
            '10': colorYellow90,
        },
        error: {
            '01': colorRed05,
            '02': colorRed10,
            '03': colorRed20,
            '04': colorRed30,
            '05': colorRed40,
            '06': colorRed50,
            '07': colorRed60,
            '08': colorRed70,
            '09': colorRed80,
            '10': colorRed90,
        },
        neutral: {
            '00': colorGrey00,
            '01': colorGrey01,
            '02': colorGrey05,
            '03': colorGrey10,
            '04': colorGrey20,
            '05': colorGrey30,
            '06': colorGrey40,
            '07': colorGrey50,
            '08': colorGrey60,
            '09': colorGrey70,
            '10': colorGrey80,
            '11': colorGrey90,
        },
        visited: {
            '01': colorPurple20,
            '02': colorPurple50,
        },
        illustration: {
            brand: colorBlue30,
            neutral: colorGrey60,
        },
        motion: {
            brand: colorBlue60,
        },
    },
    shape: {
        borderRadius: {
            sharp: borderRadius01,
            soft: borderRadius02,
            round: borderRadius04,
            pill: borderRadiusPill,
        },
    },
    spacingFactor: SPACING_FACTOR,
    componentCSS: {},
    component: {},
    elevation: {
        small: boxShadowSmall,
        medium: boxShadowMedium,
        large: boxShadowLarge,
    },
    transition: {
        normal: `${durationNormal}ms`,
    },
};
