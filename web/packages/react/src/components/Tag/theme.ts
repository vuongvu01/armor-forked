import {
    componentSpacing01,
    componentSpacing03,
    componentSpacing07,
} from '../../tokens';

const colors = {
    approved: '$color.success.light',
    denied: '$color.error.lighter',
    new: '$color.warning.light',
    enabled: '$color.primary.lightest',
};

export const tagDefaultTheme = {
    Root: {
        base: {
            borderColor: '$color.primary.lighter',
            borderRadius: '$figure.borderRadius.pill',
            height: componentSpacing07,
            justifyContent: 'center',
            paddingLeft: componentSpacing03,
            paddingRight: componentSpacing03,
        },
        approved: {
            backgroundColor: colors.approved,
            borderColor: colors.approved,
        },
        denied: {
            backgroundColor: colors.denied,
            borderColor: colors.denied,
        },
        new: {
            backgroundColor: colors.new,
            borderColor: colors.new,
        },
        enabled: {
            backgroundColor: colors.enabled,
            borderColor: colors.enabled,
            paddingRight: componentSpacing01,
        },
        onHover: {},
    },
    Icon: {
        base: {
            borderColor: '$color.primary.lightest',
            borderRadius: '$figure.borderRadius.pill',

            '&:hover': {
                backgroundColor: '$color.neutral.02',
            },
        },
        enabled: {
            marginLeft: 1,
        },
        element: {
            height: 2,
            width: 2,
        },
        onHover: {
            backgroundColor: '$color.primary.lightest',

            '&:hover': {
                backgroundColor: '$color.neutral.02',
            },
        },
    },
};
