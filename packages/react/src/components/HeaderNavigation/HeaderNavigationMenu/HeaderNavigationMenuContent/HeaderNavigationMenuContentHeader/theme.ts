import {
    componentSpacing01,
    componentSpacing02,
    componentSpacing04,
} from '../../../../../tokens';

export const headerNavigationMenuContentHeaderTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.02',
            paddingTop: componentSpacing02,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
        },
    },
    Title: {
        base: {
            marginBottom: componentSpacing01,
            color: '$color.neutral.05',
        },
    },
    Label: {
        base: {
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
        },
    },
};
