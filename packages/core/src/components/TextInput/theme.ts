import {
    componentSpacing01,
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '@deliveryhero/armor-system';

export const textInputDefaultTheme = {
    Root: {
        base: {
            $typography: 'paragraphMedium',
            borderColor: '$color.neutral.05',
            borderRadius: '$shape.borderRadius.soft',
        },
        outlined: {
            borderColor: '$color.primary.main',
        },
        error: {
            borderColor: '$color.error.main',
        },
        disabled: {
            backgroundColor: '$color.neutral.02',
            borderColor: '$color.neutral.05',
        },
    },
    InnerContainer: {
        base: {},
    },
    Input: {
        base: {
            $typography: 'paragraphMedium',

            paddingTop: componentSpacing02,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            // backgroundColor: '$color.neutral.00',
            borderRadius: '$shape.borderRadius.soft',

            '&::placeholder': {
                color: '$color.neutral.07',
            },
            '&:disabled': {
                color: '$color.neutral.07',
                // backgroundColor: '$color.neutral.02',
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
            color: '$color.neutral.07',
            marginLeft: componentSpacing03,
            marginRight: componentSpacing03,
            top: '-8px',
        },
        inside: {
            $typography: 'paragraphMedium',
            color: '$color.neutral.07',
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
            paddingLeft: componentSpacing01,
            paddingRight: componentSpacing01,
        },
    },
};
