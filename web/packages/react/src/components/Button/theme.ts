/* eslint-disable @typescript-eslint/camelcase */

import {
    componentSpacing01,
    componentSpacing02,
    componentSpacing04,
} from '../../tokens';

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontWeight: '$typography.body.fontWeight',
            letterSpacing: '$typography.body.letterSpacing',
            fontSize: '$typography.body.fontSize',
            fontFamily: '$typography.body.fontFamily',
            lineHeight: '$typography.sectionTitle.lineHeight',
            borderRadius: '$figure.borderRadius.soft',
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
            borderColor: '$color.error.main',
            backgroundColor: '$color.error.main',

            '&:hover': {
                borderColor: '$color.error.main',
                backgroundColor: '$color.error.main',
            },
            '&:focus': {
                borderColor: '$color.error.main',
                backgroundColor: '$color.error.main',
            },
            '&:active': {
                borderColor: '$color.error.main',
                backgroundColor: '$color.error.main',
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
            color: '$color.error.main',
            borderColor: '$color.error.main',

            '&:hover': {
                color: '$color.error.main',
                borderColor: '$color.error.main',
            },
            '&:focus': {
                color: '$color.error.main',
                borderColor: '$color.error.main',
            },
            '&:active': {
                color: '$color.error.main',
                borderColor: '$color.error.main',
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
            color: '$color.error.main',
            borderColor: '$color.neutral.00',
            backgroundColor: '$color.neutral.00',

            '&:hover': {
                color: '$color.error.main',
                borderColor: '$color.error.lighter',
                backgroundColor: '$color.error.lighter',
            },
            '&:focus': {
                color: '$color.error.main',
                borderColor: '$color.error.lighter',
                backgroundColor: '$color.error.lighter',
            },
            '&:active': {
                color: '$color.error.main',
                borderColor: '$color.error.lighter',
                backgroundColor: '$color.error.lighter',
            },
        },
    },
    Content: {
        base: {
            borderRadius: '$figure.borderRadius.soft',
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
