export const selectDefaultTheme = {
    ActionItem: {
        base: {
            borderRightColor: '$color.primary.main',
            borderBottomColor: '$color.primary.main',
        },
        disabled: {
            borderRightColor: '$color.neutral.04',
            borderBottomColor: '$color.neutral.04',
            '&:hover': {
                cursor: 'not-allowed',
            },
        },
    },
    OptionItem: {
        base: {
            backgroundColor: '$color.neutral.00',
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        selected: {
            backgroundColor: '$color.primary.lightest',
            borderLeftColor: '$color.primary.main',
            borderLeftWidth: '2px',
            borderLeftStyle: 'solid',
        },
    },
};
