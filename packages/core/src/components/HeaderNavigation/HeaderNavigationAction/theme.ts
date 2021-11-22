import { borderRadius02, componentSpacing02 } from '@deliveryhero/armor-system';

export const headerNavigationActionTheme = {
    Root: {
        base: {
            paddingLeft: componentSpacing02,
            paddingRight: componentSpacing02,
        },
    },
    Item: {
        base: {
            paddingTop: componentSpacing02,
            paddingRight: componentSpacing02,
            marginRight: componentSpacing02,
            paddingBottom: 0,
            paddingLeft: componentSpacing02,
            marginLeft: componentSpacing02,

            '&:hover': {
                background: '$color.primary.lightest',
                borderRadius: borderRadius02,
            },
        },
    },
};
