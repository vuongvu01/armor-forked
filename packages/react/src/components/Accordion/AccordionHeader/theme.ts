import {
    componentSpacing03,
    componentSpacing04,
    componentSpacing06,
} from '../../../tokens';

export const accordionHeaderDefaultTheme = {
    Root: {
        base: {
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
            color: '$color.neutral.11',
            paddingRight: componentSpacing03,
        },
        disabled: { color: '$color.neutral.05' },
    },
};
