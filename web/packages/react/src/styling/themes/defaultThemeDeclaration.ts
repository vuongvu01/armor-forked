import {
    blue100,
    blue200,
    blue300,
    fontSizeHTML,
    fontSizeRegular,
    fontWeightMedium,
    grey050,
    grey100,
    white,
    borderRadiusNormal,
    spanRegular,
    fontFamilyRoboto,
    blue050,
    blue070,
    blue400,
    grey200,
    fontSizeTitle,
    fontWeightRegular,
    shadow200,
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
    // todo: don't hard-code these declarations here, move them to corresponding components and make them smart (theme references, load on-demand)
    components: {
        Button: {
            Root: {
                base: {
                    fontSize: fontSizeRegular,
                    fontWeight: fontWeightMedium,
                    fontFamily: fontFamilyRoboto, // todo: link to typography.fontFamily
                    lineHeight: 1.6,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 2,
                    paddingBottom: 2,
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
                    },
                    '&:focus': {
                        borderColor: blue300,
                        backgroundColor: blue070,
                    },
                    '&:disabled': {
                        color: grey100,
                        borderColor: grey050,
                    },
                },
                tertiary: {
                    color: blue200,
                    textTransform: 'uppercase',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: blue300,
                    },
                    '&:focus': {
                        color: blue400,
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
        },
        Dialog: {
            Overlay: {
                base: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // todo: use color function here
                },
            },
            Container: {
                'DialogTitle-Text': {
                    marginRight: 9,
                },
            },
            Root: {
                base: {
                    margin: 12,
                    minHeight: 23, // 6.5 + 6 + 4 + 6.5
                    minWidth: '400px',
                },
                safeMargin: 16,
            },
            CloseButton: {
                base: {
                    color: grey200,
                    padding: 3,
                    top: 6.5,
                    right: 6.5,
                    fontSize: fontSizeHTML,
                },
            },
        },
        DialogTitle: {
            Root: {
                base: {
                    padding: 8,
                    '&:not(:last-child)': {
                        paddingBottom: 4,
                    },
                },
            },
            Text: {
                base: {
                    fontSize: fontSizeTitle,
                    fontWeight: fontWeightRegular,
                    fontFamily: fontFamilyRoboto,
                    lineHeight: 1.6,
                },
            },
            Description: {
                base: {
                    lineHeight: 1.7,
                    fontFamily: fontFamilyRoboto,
                    fontWeight: fontWeightRegular,
                    marginTop: 3,
                    fontSize: fontSizeRegular,
                },
            },
        },
        DialogContent: {
            Root: {
                base: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 8,
                    paddingRight: 8,
                    '&:first-child': {
                        paddingTop: 8,
                    },
                    '&:last-child': {
                        paddingBottom: 8,
                    },
                },
            },
        },
        DialogActions: {
            Root: {
                base: {
                    padding: 8,
                    '& > *:not(:last-child)': {
                        marginRight: 4,
                    },
                },
            },
        },
        Paper: {
            Root: {
                base: {
                    backgroundColor: white,
                    borderRadius: '4px',
                    boxShadow: shadow200,
                },
            },
        },
    },
};
