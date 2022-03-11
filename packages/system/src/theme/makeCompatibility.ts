/* eslint-disable no-param-reassign */

import { ThemeType } from './type';
import {
    colorBlue05,
    colorBlue20,
    colorBlue50,
    colorBlue60,
    colorBlue70,
    colorGreen10,
    colorGreen60,
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
} from '../tokens';

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

    theme.color = {
        ...theme.color,
        primary: {
            dark: colorBlue70,
            main: colorBlue60,
            light: colorBlue50,
            lighter: colorBlue20,
            lightest: colorBlue05,
            ...(theme.color?.primary ?? {}),
        },
        accent: {
            darker: colorTurquoise90,
            dark: colorTurquoise80,
            main: colorTurquoise70,
            light: colorTurquoise60,
            ...(theme.color?.accent ?? {}),
        },
        success: {
            main: colorGreen60,
            light: colorGreen10,
            ...(theme.color?.success ?? {}),
        },
        warning: {
            main: colorYellow60,
            light: colorYellow10,
            ...(theme.color?.warning ?? {}),
        },
        error: {
            dark: colorRed70,
            main: colorRed60,
            light: colorRed50,
            lighter: colorRed10,
            ...(theme.color?.error ?? {}),
        },
    };
};
