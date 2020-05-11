import {
    fontSizeHTML,
    fontSizeRegular,
    borderRadiusNormal,
    spanRegular,
    fontFamilyRoboto,
    blue200,
    blue300,
    blue100,
    white,
    blue050,
    blue070,
    blue400,
    red300,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: fontSizeHTML,
        fontSize: fontSizeRegular,
        fontFamily: fontFamilyRoboto,
    },
    color: {
        primary: {
            light: blue100,
            base: blue200,
            dark: blue300,
            contrast: white,
        },
        secondary: {
            light: blue050,
            base: blue070,
            dark: blue300,
            contrast: blue200,
        },
        tertiary: {
            light: blue070,
            base: blue300,
            dark: blue400,
            contrast: blue200,
        },
        danger: {
            base: red300,
            contrast: white,
        },
        background: white,
    },
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: spanRegular,
    componentOverrides: {},
    components: {},
};
