import { componentSpacing04, componentSpacing06 } from '../../../tokens';

export const accordionHeaderDefaultTheme = {
    Root: {
        base: {
            background: 'transparent',
            fontWeight: '$typography.labelMedium.fontWeight',
            letterSpacing: '$typography.labelMedium.letterSpacing',
            fontSize: '$typography.labelMedium.fontSize',
            fontFamily: '$typography.labelMedium.fontFamily',
            lineHeight: '$typography.labelMedium.lineHeight',
            paddingTop: componentSpacing04,
            paddingRight: componentSpacing06,
            paddingBottom: componentSpacing04,
            paddingLeft: componentSpacing06,

            '&:hover': {
                background: '$color.primary.lightest',
            },
            '&:focus': {
                outlineColor: '$color.primary.dark',
            },
        },
        disabled: {
            background: '$color.neutral.03',

            '&:hover': {
                background: '$color.neutral.03',
            },
        },
    },
    Typography: {
        base: {
            color: '$color.neutral.06',
        },
        disabled: { color: '$color.neutral.04' },
    },
};
