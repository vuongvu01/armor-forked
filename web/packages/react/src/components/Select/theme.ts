export const selectDefaultTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.00',
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        selected: {
            backgroundColor: '$color.primary.lightest',
        },
    },
    ActionItem: {
        base: {
            borderLeftColor: '$color.primary.main',
            borderTopColor: '$color.primary.main',
        },
        disabled: {
            borderLeftColor: '$color.neutral.04',
            borderTopColor: '$color.neutral.04',
            '&:hover': {
                cursor: 'not-allowed',
            },
        },
    },
};
