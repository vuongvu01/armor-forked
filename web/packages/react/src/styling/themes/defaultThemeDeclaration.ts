import {
    blue050,
    blue100,
    blue200,
    blue300,
    fontSizeRegular,
    fontWeightMedium,
    grey050,
    grey100,
    shadow100,
    white,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: 16,
        fontSize: fontSizeRegular,
        fontFamily: 'Roboto-Medium, sans-serif',
    },
    palette: {},
    figure: {
        borderRadius: '2px',
    },
    span: 4,
    components: {
        Button: {
            base: {
                fontSize: fontSizeRegular,
                fontWeight: fontWeightMedium,
            },
            primary: {
                base: {
                    color: white,
                    backgroundColor: blue200,
                    shadow: shadow100,
                },
                hover: {
                    backgroundColor: blue300,
                },
                focus: {
                    backgroundColor: blue100,
                },
                disabled: {
                    color: grey100,
                    backgroundColor: grey050,
                },
            },
            secondary: {
                base: {
                    color: blue200,
                    borderColor: blue200,
                    backgroundColor: white,
                },
                hover: {
                    borderColor: blue300,
                },
                focus: {
                    borderColor: blue300,
                    backgroundColor: blue050,
                },
                disabled: {
                    color: grey100,
                    borderColor: grey050,
                },
            },
            tertiary: {
                base: {
                    color: blue200,
                    textTransform: 'uppercase',
                },
                hover: {
                    color: blue300,
                },
                focus: {},
                disabled: {
                    color: grey100,
                },
            },
        },
    },
};
