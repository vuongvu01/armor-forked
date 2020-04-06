import {
    blue100,
    blue200,
    blue300,
    fontSizeHTML,
    fontSizeRegular,
    fontWeightMedium,
    grey050,
    grey100,
    shadow100,
    white,
    borderRadiusNormal,
    spanRegular,
    fontNameRobotoRegular,
    blue050,
    blue070,
    blue400,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: fontSizeHTML,
        fontSize: fontSizeRegular,
        fontFamily: fontNameRobotoRegular,
    },
    palette: {},
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: spanRegular,
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
                    backgroundColor: blue050,
                },
                hover: {
                    borderColor: blue300,
                },
                focus: {
                    borderColor: blue300,
                    backgroundColor: blue070,
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
                focus: {
                    color: blue400,
                },
                disabled: {
                    color: grey100,
                },
            },
        },
    },
};
