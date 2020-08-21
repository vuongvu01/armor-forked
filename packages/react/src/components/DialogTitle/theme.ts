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
            fontSize: '$typography.body.fontSize',
            lineHeight: '$typography.body.lineHeight',
        },
    },
    Description: {
        base: {
            lineHeight: '$typography.paragraphMedium.lineHeight',
            fontSize: '$typography.paragraphMedium.fontSize',
            marginTop: 3,
        },
    },
};
