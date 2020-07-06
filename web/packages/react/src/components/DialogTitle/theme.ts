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
            fontSize: '$typography.sectionTitle.fontSize',
            lineHeight: '$typography.sectionTitle.lineHeight',
        },
    },
    Description: {
        base: {
            lineHeight: '$typography.sectionTitle.lineHeight',
            fontSize: '$typography.sectionTitle.fontSize',
            marginTop: 3,
        },
    },
};
