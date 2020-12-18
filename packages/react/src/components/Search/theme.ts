import {
    componentSpacing01,
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
    componentSpacing06,
} from '../../tokens';

export const searchTheme = {
    TextInput: {
        base: {
            fontWeight: '$typography.paragraphMedium.fontWeight',
        },
    },
    SearchSuggestionsItem: {
        base: {
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            paddingTop: componentSpacing02,
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        highlighted: {
            backgroundColor: '$color.primary.lightest',
        },
    },
    SearchSuggestionsContainer: {
        base: {
            boxShadow: '$elevation.medium',
            marginTop: componentSpacing01,
            marginBottom: componentSpacing01,
        },
    },
    SearchSuggestionsItemIcon: {
        base: {
            paddingRight: componentSpacing03,
        },
        noIcon: {
            paddingRight: componentSpacing06,
        },
    },
    SearchSuggestionsItemAction: {
        base: {
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            color: '$color.neutral.04',
        },
    },
    SearchSuggestionsItemLabel: {
        base: {
            paddingRight: componentSpacing02,
        },
    },
};
