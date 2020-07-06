export const dialogDefaultTheme = {
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
            color: '$color.neutral.05',
            padding: 3,
            top: 6.5,
            right: 6.5,
            fontSize: '$typography.body.fontSize',
        },
    },
};
