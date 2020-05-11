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
            backgroundColor: '$color.primary.main',
            '&:hover': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.dark10',
            },
            '&:focus': {
                color: '$color.primary.contrast',
                backgroundColor: '$color.primary.light10',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
                backgroundColor: grey050, // todo: use shades of gray for theme
            },
        },
        secondary: {
            color: '$color.primary.main',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.primary.light30',
            '&:hover': {
                borderColor: '$color.primary.dark10',
                backgroundColor: '$color.primary.light20',
            },
            '&:focus': {
                borderColor: '$color.primary.dark10',
                backgroundColor: '$color.primary.light20',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
                borderColor: grey050, // todo: use shades of gray for theme
                backgroundColor: white, // todo: use shades of gray for theme
            },
        },
        tertiary: {
            color: '$color.primary.main',
            '&:hover': {
                color: '$color.primary.dark10',
                backgroundColor: '$color.primary.light20',
            },
            '&:focus': {
                color: '$color.primary.dark20',
                backgroundColor: '$color.primary.light20',
            },
            '&:disabled': {
                color: grey100, // todo: use shades of gray for theme
            },
        },
        danger: {
            color: '$color.danger.main',
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
