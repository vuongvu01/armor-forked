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
} from '../tokens';
import { transitionDurationInSec } from '../constants';

export const SPACING_FACTOR = 4;

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
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        pageTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize05,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingNone,
            lineHeight: lineHeight05,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        sectionTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize04,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight04,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        subSectionTitle: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightBold,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        labelLarge: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingMedium,
            lineHeight: lineHeight03,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        labelMedium: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingLarge,
            lineHeight: lineHeight01,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        labelSmall: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize01,
            fontWeight: fontWeightMedium,
            letterSpacing: letterSpacingMedium,
            lineHeight: lineHeight01,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        paragraphLarge: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize03,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        paragraphMedium: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize02,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingSmall,
            lineHeight: lineHeight03,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
        },
        paragraphSmall: {
            fontFamily: fontFamilyRoboto,
            fontSize: fontSize01,
            fontWeight: fontWeightRegular,
            letterSpacing: letterSpacingLarge,
            lineHeight: lineHeight02,
            // todo: remove the color from here, typography should be color-agnostic
            color: colorGrey90,
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
        success: {
            main: colorGreen60,
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
            '00': colorGrey00,
            '01': colorGrey01,
            '02': colorGrey05,
            '03': colorGrey10,
            '04': colorGrey30,
            '05': colorGrey50,
            '06': colorGrey90,
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
    spacing: SPACING_FACTOR,
    componentOverrides: {},
    components: {},
    elevation: {
        small: boxShadowSmall,
        medium: boxShadowMedium,
        large: boxShadowLarge,
    },
    transition: {
        normal: `${transitionDurationInSec}s`,
    },
};
