import { componentSpacing01 } from '@deliveryhero/armor-system';

const colors = {
    approved: '$color.success.light',
    denied: '$color.error.lighter',
    new: '$color.warning.light',
    enabled: '$color.primary.lightest',
};

/** @deprecated */
export const tagDefaultTheme = {
    Root: {
        // @deprecated, maintained for backwards compatibility
        base: {},
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
    },
    Typography: {
        // @deprecated, maintained for backwards compatibility
        base: {},
        enabled: {
            marginRight: componentSpacing01,
        },
    },
};
