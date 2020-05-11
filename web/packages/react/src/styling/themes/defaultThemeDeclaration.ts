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
            light30: blue050,
            light20: blue070,
            light10: blue100,
            main: blue200,
            dark10: blue300,
            dark20: blue400,
            contrast: white,
        },
        danger: {
            main: red300,
            contrast: white,
        },
        background: {
            main: white,
        },
    },
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: spanRegular,
    componentOverrides: {},
    components: {},
};
