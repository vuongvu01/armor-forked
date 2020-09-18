import { colorGrey50, fontSize03 } from '../../tokens';

export const messageDefaultTheme = {
    Root: {
        base: {
            borderRadius: '$figure.borderRadius.soft',
            borderColor: '$color.primary.main',
            backgroundColor: '$color.neutral.00',
            paddingLeft: 4,
            paddingRight: 4,
        },
        info: {
            '.MessageAction-Root--use-message-color': {
                color: '$color.primary.main',
            },
        },
        warning: {
            borderColor: '$color.warning.main',
            '.MessageAction-Root--use-message-color': {
                color: '$color.warning.main',
            },
        },
        error: {
            borderColor: '$color.error.main',
            '.MessageAction-Root--use-message-color': {
                color: '$color.error.main',
            },
        },
        success: {
            borderColor: '$color.accent.main',
            '.MessageAction-Root--use-message-color': {
                color: '$color.accent.main',
            },
        },
    },
    Icon: {
        base: {
            fontSize: 24,
            marginRight: 2,
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
            color: '$color.neutral.06',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            fontSize: '$typography.paragraphMedium.fontSize',
            fontFamily: '$typography.body.fontFamily',
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
            fontSize: fontSize03,
            color: colorGrey50,
            paddingTop: 5,
            paddingBottom: 4,
            paddingLeft: 2,
        },
    },
};
