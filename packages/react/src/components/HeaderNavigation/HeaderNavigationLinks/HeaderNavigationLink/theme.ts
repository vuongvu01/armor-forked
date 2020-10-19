import { componentSpacing03, componentSpacing04 } from '../../../../tokens';

export const headerNavigationLink = {
    Root: {
        base: {
            paddingTop: componentSpacing03,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing03,
            paddingLeft: componentSpacing04,

            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        active: {
            borderBottomColor: '$color.primary.main',
        },
        href: {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    Href: {
        base: {
            color: '$color.neutral.06',
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            paddingTop: componentSpacing03,
        },
    },
};
