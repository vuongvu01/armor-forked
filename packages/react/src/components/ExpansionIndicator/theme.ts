import { componentSpacing02 } from '../../tokens';

export const expansionIndicatorDefaultTheme = {
    Root: {
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
        rotate: {
            transform: 'rotate(225deg)',
            marginTop: componentSpacing02,
        },
        separator: {
            borderLeftColor: '$color.neutral.03',
        },
    },
};
