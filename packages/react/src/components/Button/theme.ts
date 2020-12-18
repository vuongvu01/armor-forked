/* eslint-disable @typescript-eslint/camelcase */

/** @deprecated */

import {
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '../../tokens';

const primaryInitialColors = {
    color: '$color.neutral.00',
    borderColor: '$color.primary.main',
    backgroundColor: '$color.primary.main',
};

const primaryDangerInitialColors = {
    borderColor: '$color.error.main',
    backgroundColor: '$color.error.main',
};

const tertiaryInitialColors = {
    color: '$color.primary.main',
};

const tertiaryDangerInitialColors = {
    color: '$color.error.main',
};

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontWeight: '$typography.labelMedium.fontWeight',
            letterSpacing: '$typography.labelMedium.letterSpacing',
            fontSize: '$typography.labelMedium.fontSize',
            fontFamily: '$typography.body.fontFamily',
            lineHeight: '$typography.labelMedium.lineHeight',
            borderRadius: '$shape.borderRadius.soft',
            backgroundColor: 'transparent',
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            paddingTop: componentSpacing03,
            paddingBottom: componentSpacing03,
        },
        small: {
            paddingTop: componentSpacing02,
            paddingBottom: componentSpacing02,
        },
        primary: {
            ...primaryInitialColors,
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
            '&:focus:not(:active)': {
                ...primaryInitialColors,
            },
        },
        primary__danger: {
            ...primaryDangerInitialColors,
            '&:hover': {
                borderColor: '$color.error.light',
                backgroundColor: '$color.error.light',
            },
            '&:focus': {
                borderColor: '$color.error.light',
                backgroundColor: '$color.error.light',
            },
            '&:active': {
                borderColor: '$color.error.dark',
                backgroundColor: '$color.error.dark',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.03',
            },
            '&:focus:not(:active)': {
                ...primaryDangerInitialColors,
            },
        },
        secondary: {
            color: '$color.primary.main',
            borderColor: '$color.primary.main',
            backgroundColor: 'transparent',

            '&:hover': {
                color: '$color.primary.light',
                borderColor: '$color.primary.light',
                backgroundColor: '$color.primary.lightest',
            },
            '&:focus': {
                color: '$color.primary.light',
                borderColor: '$color.primary.light',
            },
            '&:active': {
                color: '$color.primary.dark',
                borderColor: '$color.primary.dark',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.03',
            },
        },
        secondary__danger: {
            color: '$color.error.main',
            borderColor: '$color.error.main',

            '&:hover': {
                color: '$color.error.light',
                borderColor: '$color.error.light',
            },
            '&:focus': {
                color: '$color.error.light',
                borderColor: '$color.error.light',
            },
            '&:active': {
                color: '$color.error.dark',
                borderColor: '$color.error.dark',
            },
        },
        tertiary: {
            ...tertiaryInitialColors,
            '&:hover': {
                color: '$color.primary.light',
            },
            '&:focus': {
                color: '$color.primary.light',
            },
            '&:active': {
                color: '$color.primary.dark',
            },
            '&:disabled': {
                color: '$color.neutral.04',
            },
            '&:focus:not(:active)': {
                ...tertiaryInitialColors,
            },
        },
        tertiary__danger: {
            ...tertiaryDangerInitialColors,
            '&:hover': {
                color: '$color.error.main',
            },
            '&:focus': {
                color: '$color.error.main',
            },
            '&:active': {
                color: '$color.error.main',
            },
            '&:disabled': {
                color: '$color.neutral.04',
            },
            '&:focus:not(:active)': {
                ...tertiaryDangerInitialColors,
            },
        },
    },
};
