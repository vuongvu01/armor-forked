export const tableRowDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            borderColor: '$color.neutral.03',
            backgroundColor: '$color.neutral.01',
        },
        body: {
            '&:hover td': {
                // dirty hack :)
                backgroundColor: '$color.primary.lightest',
            },
        },
    },
};
