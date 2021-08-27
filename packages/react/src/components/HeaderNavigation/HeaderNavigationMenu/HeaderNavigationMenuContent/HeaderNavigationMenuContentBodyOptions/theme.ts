import {
    componentSpacing02,
    componentSpacing04,
    componentSpacing06,
} from '../../../../../tokens';

export const headerNavigationMenuContentBodyOptionsTheme = {
    Root: {
        base: {
            paddingTop: componentSpacing06,
            paddingBottom: componentSpacing06,
        },
    },
    Item: {
        base: {
            fontFamily: '$typography.paragraphMedium.fontFamily',
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            letterSpacing: '$typography.paragraphMedium.letterSpacing',
            lineHeight: '$typography.paragraphMedium.lineHeight',
            color: '$color.neutral.07',
            paddingTop: componentSpacing02,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,

            '&:hover': {
                borderLeftColor: '$color.primary.main',
                backgroundColor: '$color.primary.lightest',
            },
        },
    },
    Category: {
        base: {
            fontFamily: '$typography.labelSmall.fontFamily',
            fontSize: '$typography.labelSmall.fontSize',
            fontWeight: '$typography.labelSmall.fontWeight',
            letterSpacing: '$typography.labelSmall.letterSpacing',
            lineHeight: '$typography.labelSmall.lineHeight',
            color: '$typography.labelSmall.color',
            paddingTop: componentSpacing02,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing02,
            paddingLeft: componentSpacing04,
        },
    },
};
