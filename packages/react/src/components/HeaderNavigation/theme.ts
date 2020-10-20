import {
    componentSpacing02,
    componentSpacing03,
    componentSpacing04,
} from '../../tokens';

export const headerNavigationDefaultTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.02',
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            fontFamily: '$typography.labelLarge.fontFamily',
            fontSize: '$typography.labelLarge.fontSize',
            fontWeight: '$typography.labelLarge.fontWeight',
            letterSpacing: '$typography.labelLarge.letterSpacing',
            lineHeight: '$typography.labelLarge.lineHeight',
            color: '$typography.labelLarge.color',
        },
    },
    PackItem: {
        base: {
            backgroundColor: '$color.neutral.02',
            paddingLeft: componentSpacing02,
            paddingRight: componentSpacing02,
            paddingTop: componentSpacing03,
            paddingBottom: componentSpacing03,
        },
    },
};
