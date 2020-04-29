import {
    fontSizeHTML,
    fontSizeRegular,
    borderRadiusNormal,
    spanRegular,
    fontFamilyRoboto,
} from '../../tokens';

export const defaultThemeDeclaration = {
    typography: {
        htmlFontSize: fontSizeHTML,
        fontSize: fontSizeRegular,
        fontFamily: `${fontFamilyRoboto}, sans-serif`,
    },
    palette: {},
    figure: {
        borderRadius: borderRadiusNormal,
    },
    span: spanRegular,
    overrides: {},
    components: {},
};
