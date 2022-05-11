/* eslint-disable no-param-reassign */

import { ThemeType } from './type';

export const makeCompatibility = (theme: ThemeType): void => {
    const bodyColor = theme.body.color;

    if (!theme.typography.body.color) {
        theme.typography.body.color = bodyColor;
    }
    if (!theme.typography.pageTitle.color) {
        theme.typography.pageTitle.color = bodyColor;
    }
    if (!theme.typography.sectionTitle.color) {
        theme.typography.sectionTitle.color = bodyColor;
    }
    if (!theme.typography.subSectionTitle.color) {
        theme.typography.subSectionTitle.color = bodyColor;
    }
    if (!theme.typography.labelLarge.color) {
        theme.typography.labelLarge.color = bodyColor;
    }
    if (!theme.typography.labelMedium.color) {
        theme.typography.labelMedium.color = bodyColor;
    }
    if (!theme.typography.labelSmall.color) {
        theme.typography.labelSmall.color = bodyColor;
    }
    if (!theme.typography.paragraphLarge.color) {
        theme.typography.paragraphLarge.color = bodyColor;
    }
    if (!theme.typography.paragraphMedium.color) {
        theme.typography.paragraphMedium.color = bodyColor;
    }
    if (!theme.typography.paragraphSmall.color) {
        theme.typography.paragraphSmall.color = bodyColor;
    }

    const colors = theme.color;

    theme.color = {
        ...theme.color,
        primary: {
            dark: colors.primary['08'], // colorBlue70,
            main: colors.primary['07'], // colorBlue60,
            light: colors.primary['06'], // colorBlue50,
            lighter: colors.primary['03'], // colorBlue20,
            lightest: colors.primary['01'], // colorBlue05,
            ...(theme.color?.primary ?? {}),
        },
        accent: {
            darker: colors.accent['10'], // colorTurquoise90,
            dark: colors.accent['09'], // colorTurquoise80,
            main: colors.accent['08'], // colorTurquoise70,
            light: colors.accent['07'], // colorTurquoise60,
            ...(theme.color?.accent ?? {}),
        },
        success: {
            main: colors.success['07'], // colorGreen60,
            light: colors.success['02'], // colorGreen10,
            ...(theme.color?.success ?? {}),
        },
        warning: {
            main: colors.warning['07'], // colorYellow60,
            light: colors.warning['02'], // colorYellow10,
            ...(theme.color?.warning ?? {}),
        },
        error: {
            dark: colors.error['08'], // colorRed70,
            main: colors.error['07'], // colorRed60,
            light: colors.error['06'], // colorRed50,
            lighter: colors.error['02'], // colorRed10,
            ...(theme.color?.error ?? {}),
        },
    };
};
