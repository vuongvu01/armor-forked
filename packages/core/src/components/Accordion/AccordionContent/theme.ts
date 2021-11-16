import { componentSpacing06 } from '@deliveryhero/armor-system';

export const accordionContentDefaultTheme = {
    Root: {
        base: {
            lineHeight: 0,
            paddingRight: componentSpacing06,
            paddingLeft: componentSpacing06,
        },
        expanded: {
            lineHeight: '$typography.body.lineHeight',
            padding: componentSpacing06,
        },
    },
};
