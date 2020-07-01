import { fontWeightMedium } from 'src/tokens';

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontSize: '$typography.fontSize',
            fontWeight: fontWeightMedium,
            fontFamily: '$typography.fontFamily',
            lineHeight: '1.6',
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
            borderRadius: '$figure.borderRadius',
            backgroundColor: 'transparent',
        },
        small: {
            paddingTop: 1,
            paddingBottom: 1,
        },
        primary: {
            color: '$color.primary.contrast',
            backgroundColor: '$color.primary.main',
            '&:hover': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.darker',
            },
            '&:focus': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.darker',
            },
            '&:active': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.dark',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                backgroundColor: '$color.neutral.03',
            },
        },
        secondary: {
            color: '$color.primary.main',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.neutral.00',
            '&:hover': {
                borderColor: '$color.primary.darker',
                backgroundColor: '$color.primary.lighter',
            },
            '&:focus': {
                borderColor: '$color.primary.darker',
                backgroundColor: '$color.primary.light',
            },
            '&:active': {
                borderColor: '$color.primary.darker',
                backgroundColor: '$color.primary.light',
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
            '&:active': {},
            '&:disabled': {
                color: '$color.neutral.04',
                backgroundColor: '$color.neutral.00',
            },
        },
        danger: {
            color: '$color.danger.main',
            borderColor: 'transparent',
            '&:hover': {
                backgroundColor: '$color.danger.lighter',
            },
            '&:focus': {
                backgroundColor: '$color.danger.lighter',
            },
            '&:active': {
                backgroundColor: '$color.danger.light',
            },
            '&:disabled': {
                color: '$color.neutral.04',
                backgroundColor: 'transparent',
            },
        },
    },
};
