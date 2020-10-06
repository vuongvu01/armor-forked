import {
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '../../../tokens';

const iconBase = {
    color: '$color.neutral.04',
    paddingTop: componentSpacing02,
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
            paddingLeft: componentSpacing03,
        },
    },
};
