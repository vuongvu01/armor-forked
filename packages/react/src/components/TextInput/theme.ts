/* eslint-disable @typescript-eslint/camelcase */
import {
    colorGrey00,
    colorGrey05,
    componentSpacing01,
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '../../tokens';

export const textInputDefaultTheme = {
    Root: {
        base: {
            $typography: 'paragraphMedium',
            borderColor: '$color.neutral.04',
            borderRadius: '$shape.borderRadius.soft',
            backgroundColor: '$color.neutral.00',
        },
        outlined: {
            borderColor: '$color.primary.main',
        },
        error: {
            borderColor: '$color.error.main',
        },
        disabled: {
            backgroundColor: '$color.neutral.02',
            borderColor: '$color.neutral.04',
        },
    },
    Input: {
        base: {
            $typography: 'paragraphMedium',

            paddingTop: componentSpacing02,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            backgroundColor: '$color.neutral.00',
            borderRadius: '$shape.borderRadius.soft',

            '&::placeholder': {
                color: '$color.neutral.05',
            },
            '&:disabled': {
                color: '$color.neutral.05',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.02',
            },
        },
        large: {
            paddingTop: componentSpacing03,
            paddingBottom: componentSpacing03,
        },
    },
    Label: {
        base: {
            $typography: 'labelSmall',
            color: '$color.neutral.05',
            marginLeft: componentSpacing03,
            marginRight: componentSpacing03,
            top: '-8px',
        },
        inside: {
            $typography: 'paragraphMedium',
            color: '$color.neutral.05',
            top: '9px',
        },
        inside__large: {
            top: '12px',
        },
        outlined: {},
        disabled: {
            background: 'transparent',
        },
        error: {
            color: '$color.error.main',
        },
    },
    LabelBackground: {
        base: {
            background: `linear-gradient(0, ${colorGrey00} 70%, transparent 30%)`,
            paddingLeft: componentSpacing01,
            paddingRight: componentSpacing01,
        },
        disabled: {
            background: `linear-gradient(0, ${colorGrey05} 70%, transparent 30%)`,
        },
    },
};
