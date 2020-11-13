import { componentSpacing04 } from '../../../tokens';

const iconBase = {
    color: '$color.neutral.05',
    width: componentSpacing04,
    height: componentSpacing04,
};

export const searchIconTheme = {
    SearchIcon: {
        base: iconBase,
    },
    LoadingIcon: {
        base: iconBase,
    },
    SearchIconContainer: {
        base: {
            paddingLeft: 3.5,
        },
    },
};
