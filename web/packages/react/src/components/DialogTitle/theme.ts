import { fontSizeTitle, fontWeightNormal } from '../../tokens';

export const dialogTitleDefaultTheme = {
    Root: {
        base: {
            padding: 8,
            '&:not(:last-child)': {
                paddingBottom: 4,
            },
        },
    },
    // todo: probably reuse Typography component as title
    Text: {
        base: {
            fontSize: fontSizeTitle,
            fontWeight: fontWeightNormal,
            fontFamily: '$typography.fontFamily',
            lineHeight: 1.6,
        },
    },
    Description: {
        base: {
            lineHeight: 1.7,
            fontFamily: '$typography.fontFamily',
            fontWeight: fontWeightNormal,
            fontSize: '$typography.fontSize',
            marginTop: 3,
        },
    },
};
