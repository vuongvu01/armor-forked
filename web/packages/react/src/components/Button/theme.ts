import { fontWeightMedium } from '../../tokens';

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontSize: '$typography.fontSize',
            fontWeight: fontWeightMedium,
            fontFamily: '$typography.fontFamily',
            textTransform: 'uppercase',
            lineHeight: 1.6,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
            borderRadius: '$figure.borderRadius',
            backgroundColor: 'transparent',
        },
        primary: {
            color: '$color.primary.contrast',
            backgroundColor: '$color.primary.main',
            '&:hover': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.dark',
            },
            '&:focus': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.light',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                backgroundColor: '$color.neutral.03',
            },
        },
        secondary: {
            color: '$color.primary.main',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.primary.lighter',
            '&:hover': {
                borderColor: '$color.primary.dark',
                backgroundColor: '$color.primary.lighter',
            },
            '&:focus': {
                borderColor: '$color.primary.dark',
                backgroundColor: '$color.primary.lighter',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.00',
            },
        },
        tertiary: {
            color: '$color.primary.main',
            '&:hover': {
                color: '$color.primary.dark',
                backgroundColor: '$color.primary.lighter',
            },
            '&:focus': {
                color: '$color.primary.darker',
                backgroundColor: '$color.primary.lighter',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                backgroundColor: '$color.neutral.00',
            },
        },
        danger: {
            color: '$color.danger.main',
            '&:disabled': {
                color: '$color.neutral.04',
            },
        },
        small: {
            paddingTop: 1,
            paddingBottom: 1,
        },
    },
};
