import { componentSpacing02, componentSpacing03 } from '../../../tokens';

export const searchClearActionTheme = {
    ClearIcon: {
        base: {
            color: '$color.neutral.04',
            width: componentSpacing03,
            height: componentSpacing03,
        },
        disabled: {
            color: '$color.neutral.02',
            paddingTop: componentSpacing02,
        },
        transparent: {
            color: '$color.neutral.00',
        },
    },
    ClearIconContainer: {
        base: {
            paddingRight: componentSpacing02,
        },
    },
};
