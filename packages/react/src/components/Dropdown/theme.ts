import { layoutSpacing05 } from '../../tokens';

export const dropdownDefaultTheme = {
    OptionItem: {
        base: {
            backgroundColor: '$color.neutral.00',
            height: layoutSpacing05,
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        selected: {
            backgroundColor: '$color.primary.lightest',
            borderLeftColor: '$color.primary.main',
        },
    },
    OptionList: {
        base: {
            boxShadow: '$elevation.large',
        },
        displayed: {
            height: 'auto',
        },
    },
};
