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
            color: '$palette.main.contrastText',
            backgroundColor: '$palette.main.200',
            '&:hover': {
                color: '$palette.main.contrastText',
                backgroundColor: '$palette.main.300',
            },
            '&:focus': {
                color: '$palette.main.contrastText',
                backgroundColor: '$palette.main.100',
            },
            '&:disabled': {
                color: grey100,
                backgroundColor: grey050,
            },
        },
        secondary: {
            color: '$palette.main.200',
            borderColor: '$palette.main.200',
            backgroundColor: '$palette.main.50',
            '&:hover': {
                borderColor: '$palette.main.300',
                backgroundColor: '$palette.main.70',
            },
            '&:focus': {
                borderColor: '$palette.main.300',
                backgroundColor: '$palette.main.70',
            },
            '&:disabled': {
                color: grey100,
                borderColor: grey050,
                backgroundColor: white,
            },
        },
        tertiary: {
            color: '$palette.main.200',
            '&:hover': {
                color: '$palette.main.300',
                backgroundColor: '$palette.main.70',
            },
            '&:focus': {
                color: '$palette.main.400',
                backgroundColor: '$palette.main.70',
            },
            '&:disabled': {
                color: grey100,
            },
        },
        small: {
            paddingTop: 1,
            paddingBottom: 1,
        },
    },
};
