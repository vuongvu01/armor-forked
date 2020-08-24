import {
    componentSpacing01,
    componentSpacing02,
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
            paddingLeft: componentSpacing01,
            paddingRight: componentSpacing01,
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
        element: {
            height: componentSpacing02,
            width: componentSpacing02,
        },
        onHover: {
            backgroundColor: '$color.primary.lightest',

            '&:hover': {
                backgroundColor: '$color.neutral.02',
            },
        },
    },
    Typography: {
        base: {
            marginTop: componentSpacing01,
            marginRight: componentSpacing02,
            marginBottom: 0,
            marginLeft: componentSpacing02,
        },
        enabled: {
            marginRight: componentSpacing01,
        },
    },
};
