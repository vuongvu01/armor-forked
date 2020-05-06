import {
    blue050,
    blue070,
    blue100,
    blue200,
    blue300,
    blue400,
    fontFamilyRoboto,
    fontSizeRegular,
    fontWeightMedium,
    grey050,
    grey100,
    white,
} from '../../tokens';

export const buttonDefaultTheme = {
    Root: {
        base: {
            fontSize: fontSizeRegular,
            fontWeight: fontWeightMedium,
            fontFamily: fontFamilyRoboto, // todo: link to typography.fontFamily
            textTransform: 'uppercase',
            lineHeight: 1.6,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
            borderRadius: '4px',
        },
        primary: {
            color: white,
            backgroundColor: blue200,
            '&:hover': {
                color: white,
                backgroundColor: blue300,
            },
            '&:focus': {
                color: white,
                backgroundColor: blue100,
            },
            '&:disabled': {
                color: grey100,
                backgroundColor: grey050,
            },
        },
        secondary: {
            color: blue200,
            borderColor: blue200,
            backgroundColor: blue050,
            '&:hover': {
                borderColor: blue300,
                backgroundColor: blue070,
            },
            '&:focus': {
                borderColor: blue300,
                backgroundColor: blue070,
            },
            '&:disabled': {
                color: grey100,
                borderColor: grey050,
                backgroundColor: white,
            },
        },
        tertiary: {
            color: blue200,
            '&:hover': {
                color: blue300,
                backgroundColor: blue070,
            },
            '&:focus': {
                color: blue400,
                backgroundColor: blue070,
            },
            '&:disabled': {
                color: grey100,
                backgroundColor: 'transparent',
            },
        },
        small: {
            paddingTop: 1,
            paddingBottom: 1,
        },
    },
};
