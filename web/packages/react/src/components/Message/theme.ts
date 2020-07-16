export const messageDefaultTheme = {
    Root: {
        base: {
            borderRadius: '$figure.borderRadius.soft',
            paddingLeft: 4,
            paddingRight: 4,
        },
        paddedRight: {
            paddingRight: 10,
        },
        info: {
            borderColor: '$color.primary.main',
            backgroundColor: '$color.neutral.01',
            '.MessageAction-Root--use-message-color': {
                color: '$color.primary.main',
            },
        },
        warning: {
            borderColor: '$color.warning.main',
            backgroundColor: '$color.neutral.01',
            '.MessageAction-Root--use-message-color': {
                color: '$color.warning.main',
            },
        },
        error: {
            borderColor: '$color.error.main',
            backgroundColor: '$color.neutral.02',
            '.MessageAction-Root--use-message-color': {
                color: '$color.error.main',
            },
        },
        success: {
            borderColor: '$color.accent.main',
            backgroundColor: '$color.neutral.01',
            '.MessageAction-Root--use-message-color': {
                color: '$color.accent.main',
            },
        },
    },
    Icon: {
        base: {
            fontSize: 24,
            marginRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
        },
        info: {
            color: '$color.primary.main',
        },
        warning: {
            color: '$color.warning.main',
        },
        error: {
            color: '$color.error.main',
        },
        success: {
            color: '$color.accent.main',
        },
    },
    Central: {
        base: {},
    },
    Content: {
        base: {
            color: '$color.text.main',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            fontSize: '$typography.paragraphMedium.fontSize',
            fontFamily: '$typography.paragraphMedium.fontFamily',

            paddingTop: 4,
            paddingBottom: 4,
        },
    },
    Actions: {
        base: {
            marginLeft: 4,

            paddingTop: 1,
            paddingBottom: 1,
        },
    },
    Extra: {
        base: {
            marginLeft: 4,
            paddingTop: 2,
            paddingBottom: 2,
        },
    },
    CloseButton: {
        base: {
            top: 2,
            right: 2,
            height: 6,
            width: 6,
            color: '$color.neutral.05',
            fontSize: '$typography.paragraphMedium.fontSize',
        },
    },
};
