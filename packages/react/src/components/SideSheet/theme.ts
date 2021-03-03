import {
    componentSpacing04,
    componentSpacing06,
    componentSpacing08,
} from '../../tokens';

export const sideSheetDefaultTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.00',
            boxShadow: '$elevation.medium',
        },
    },
    Content: {
        base: {
            padding: componentSpacing06,
        },
    },
    Footer: {
        base: {
            borderTopColor: '$color.neutral.03',
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            paddingTop: componentSpacing06,
        },
    },
    Header: {
        base: {
            paddingBottom: componentSpacing08,
            paddingRight: componentSpacing04,
        },
    },
};
