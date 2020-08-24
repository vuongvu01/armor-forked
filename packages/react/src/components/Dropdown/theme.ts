import { componentSpacing02, layoutSpacing05 } from '../../tokens';

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
        rotate: {
            transform: 'rotate(225deg)',
            marginTop: componentSpacing02,
        },
        separator: {
            borderLeftColor: '$color.neutral.03',
        },
    },
    OptionItem: {
        base: {
            backgroundColor: '$color.neutral.00',
            height: layoutSpacing05,
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        selected: {
            backgroundColor: '$color.primary.lightest',
            borderLeftColor: '$color.primary.main',
        },
    },
    OptionList: {
        base: {
            boxShadow: '$elevation.large',
        },
        displayed: {
            height: 'auto',
        },
    },
};
