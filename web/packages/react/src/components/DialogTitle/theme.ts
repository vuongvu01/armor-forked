import {
    fontFamilyRoboto,
    fontSizeRegular,
    fontSizeTitle,
    fontWeightRegular,
} from '../../tokens';

export const dialogTitleDefaultTheme = {
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
};
