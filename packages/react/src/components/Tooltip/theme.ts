export const tooltipDefaultTheme = {
    Root: {
        base: {
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            fontFamily: '$typography.paragraphMedium.fontFamily',
            borderRadius: '$shape.borderRadius.soft',
            lineHeight: '$typography.paragraphMedium.lineHeight',
            padding: 3,
        },
        normal: {
            color: '$color.neutral.05',
            backgroundColor: '$color.neutral.00',
        },
        error: {
            color: '$color.neutral.00',
            backgroundColor: '$color.error.main',
        },
        small: {
            padding: 2,
        },
    },
    Arrow: {
        base: {},
        normal: {
            '&:before': {
                backgroundColor: '$color.neutral.00',
            },
        },
        error: {
            '&:before': {
                backgroundColor: '$color.error.main',
            },
        },
    },
};
