import { componentSpacing01 } from '../../tokens';

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
