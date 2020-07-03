/* eslint-disable @typescript-eslint/camelcase */

import {
    borderRadius03,
    colorRed10,
    colorRed60,
    componentSpacing01,
    componentSpacing02,
    componentSpacing04,
} from '../../tokens';

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontSize: '$typography.labelMedium.fontSize',
            fontWeight: '$typography.labelMedium.fontWeight',
            fontFamily: '$typography.body.fontFamily',
            letterSpacing: '$typography.labelMedium.letterSpacing',
            lineHeight: '$typography.labelMedium.lineHeight',
            borderRadius: borderRadius03,
            backgroundColor: 'transparent',
        },
        primary: {
            color: '$color.neutral.00',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.primary.main',

            '&:hover': {
                color: '$color.neutral.00',
                borderColor: '$color.primary.light',
                backgroundColor: '$color.primary.light',
            },
            '&:focus': {
                color: '$color.neutral.00',
                borderColor: '$color.primary.light',
                backgroundColor: '$color.primary.light',
            },
            '&:active': {
                color: '$color.neutral.00',
                borderColor: '$color.primary.dark',
                backgroundColor: '$color.primary.dark',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.03',
            },
        },
        primary__danger: {
            borderColor: colorRed60,
            backgroundColor: colorRed60,

            '&:hover': {
                borderColor: colorRed60,
                backgroundColor: colorRed60,
            },
            '&:focus': {
                borderColor: colorRed60,
                backgroundColor: colorRed60,
            },
            '&:active': {
                borderColor: colorRed60,
                backgroundColor: colorRed60,
            },
        },
        secondary: {
            color: '$color.primary.main',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.neutral.00',

            '&:hover': {
                color: '$color.primary.light',
                borderColor: '$color.primary.light',
            },
            '&:focus': {
                color: '$color.primary.light',
                borderColor: '$color.primary.light',
            },
            '&:active': {
                color: '$color.primary.dark',
                borderColor: '$color.primary.light',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.03',
            },
        },
        secondary__danger: {
            color: colorRed60,
            borderColor: colorRed60,

            '&:hover': {
                color: colorRed60,
                borderColor: colorRed60,
            },
            '&:focus': {
                color: colorRed60,
                borderColor: colorRed60,
            },
            '&:active': {
                color: colorRed60,
                borderColor: colorRed60,
            },
        },
        tertiary: {
            color: '$color.primary.main',
            borderColor: '$color.neutral.00',
            backgroundColor: '$color.neutral.00',

            '&:hover': {
                color: '$color.primary.light',
                borderColor: '$color.neutral.02',
                backgroundColor: '$color.neutral.02',
            },
            '&:focus': {
                color: '$color.primary.light',
                borderColor: '$color.neutral.02',
                backgroundColor: '$color.neutral.02',
            },
            '&:active': {},
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.03',
            },
        },
        tertiary__danger: {
            color: colorRed60,
            borderColor: '$color.neutral.00',
            backgroundColor: '$color.neutral.00',

            '&:hover': {
                color: colorRed60,
                borderColor: colorRed10,
                backgroundColor: colorRed10,
            },
            '&:focus': {
                color: colorRed60,
                borderColor: colorRed10,
                backgroundColor: colorRed10,
            },
            '&:active': {
                color: colorRed60,
                borderColor: colorRed10,
                backgroundColor: colorRed10,
            },
        },
    },
    Content: {
        base: {
            borderRadius: borderRadius03,
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            paddingTop: componentSpacing02,
            paddingBottom: componentSpacing02,
        },
        small: {
            paddingTop: componentSpacing01,
            paddingBottom: componentSpacing01,
        },
    },
};
