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
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: fontSizeHTML,
        fontSize: fontSizeRegular,
        fontFamily: fontFamilyRoboto,
    },
    palette: {
        main: {
            50: blue050,
            70: blue070,
            100: blue100,
            200: blue200,
            300: blue300,
            400: blue400,
            contrastText: white,
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
