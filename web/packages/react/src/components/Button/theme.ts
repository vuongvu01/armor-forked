import { fontWeightMedium, grey050, grey100, white } from '../../tokens';

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
            backgroundColor: '$color.primary.base',
            '&:hover': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.dark',
            },
            '&:focus': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.light',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
                backgroundColor: grey050, // todo: use shades of gray for theme
            },
        },
        secondary: {
            color: '$color.secondary.contrast',
            borderColor: '$color.secondary.contrast',
            backgroundColor: '$color.secondary.light',
            '&:hover': {
                borderColor: '$color.secondary.dark',
                backgroundColor: '$color.secondary.base',
            },
            '&:focus': {
                borderColor: '$color.secondary.dark',
                backgroundColor: '$color.secondary.base',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
                borderColor: grey050, // todo: use shades of gray for theme
                backgroundColor: white, // todo: use shades of gray for theme
            },
        },
        tertiary: {
            color: '$color.tertiary.contrast',
            '&:hover': {
                color: '$color.tertiary.base',
                backgroundColor: '$color.tertiary.light',
            },
            '&:focus': {
                color: '$color.tertiary.dark',
                backgroundColor: '$color.tertiary.light',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
            },
        },
        danger: {
            color: '$color.danger.base',
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
            },
        },
        small: {
            paddingTop: 1,
            paddingBottom: 1,
        },
    },
};
