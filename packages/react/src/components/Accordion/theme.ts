import { componentSpacing06 } from '../../tokens';

export const accordionDefaultTheme = {
    Accordion: {
        base: {
            borderBottomColor: '$color.neutral.03',
            borderTopColor: '$color.neutral.03',
        },
    },
    AccordionContent: {
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
