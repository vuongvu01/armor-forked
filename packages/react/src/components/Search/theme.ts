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

    SearchSuggestionsContainer: {
        base: {
            boxShadow: '$elevation.medium',
            marginTop: componentSpacing01,
            marginBottom: componentSpacing01,
        },
    },
};
