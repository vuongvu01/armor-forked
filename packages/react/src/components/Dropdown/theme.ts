import {
    componentSpacing02,
    componentSpacing04,
    layoutSpacing05,
} from '../../tokens';

export const dropdownDefaultTheme = {
    OptionItem: {
        base: {
            backgroundColor: '$color.neutral.00',
            minHeight: layoutSpacing05,
            paddingTop: componentSpacing02,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
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
