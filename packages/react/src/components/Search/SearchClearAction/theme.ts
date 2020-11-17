import { componentSpacing03 } from '../../../tokens';

export const searchClearActionTheme = {
    ClearIcon: {
        base: {
            color: '$color.neutral.05',
            width: componentSpacing03,
            height: componentSpacing03,
        },
        disabled: {
            color: '$color.neutral.02',
        },
        transparent: {
            color: '$color.neutral.00',
        },
    },
    ClearIconContainer: {
        base: {
            paddingRight: 3.5,
        },
    },
};
