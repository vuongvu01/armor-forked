import { componentSpacing06 } from '../../../tokens';

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
