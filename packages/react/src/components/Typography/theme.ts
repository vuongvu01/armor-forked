/* eslint-disable @typescript-eslint/camelcase */

const makeLineHeight = (valueReference: string) => ({
    lineHeight: `$typography.${valueReference}.lineHeight`,
    '--typography--line-height': `$typography.${valueReference}.lineHeight`,
});

export const typographyDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontSize: '$typography.body.fontSize',
            ...makeLineHeight('body'),
            fontWeight: '$typography.body.fontWeight',
            fontFamily: '$typography.body.fontFamily',
            letterSpacing: '$typography.body.letterSpacing',
            color: '$typography.body.color',
        },
        error__disabled: {
            color: '$color.error.lighter',
        },
        error: {
            color: '$color.error.main',
        },
        disabled: {
            color: '$color.neutral.05',
        },
        pageTitle: {
            fontSize: '$typography.pageTitle.fontSize',
            ...makeLineHeight('pageTitle'),
            letterSpacing: '$typography.pageTitle.letterSpacing',
        },
        sectionTitle: {
            fontSize: '$typography.sectionTitle.fontSize',
            ...makeLineHeight('sectionTitle'),
        },
        subSectionTitle: {
            fontWeight: '$typography.subSectionTitle.fontWeight',
        },
        label__large: {
            letterSpacing: '$typography.labelLarge.letterSpacing',
        },
        label__medium: {
            ...makeLineHeight('labelMedium'),
            letterSpacing: '$typography.labelMedium.letterSpacing',
        },
        label__small: {
            fontSize: '$typography.labelSmall.fontSize',
            ...makeLineHeight('labelSmall'),
            letterSpacing: '$typography.labelSmall.letterSpacing',
        },
        paragraph__large: {
            fontWeight: '$typography.paragraphLarge.fontWeight',
        },
        paragraph__medium: {
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
        },
        paragraph__small: {
            fontSize: '$typography.paragraphSmall.fontSize',
            fontWeight: '$typography.paragraphSmall.fontWeight',
            ...makeLineHeight('paragraphSmall'),
            letterSpacing: '$typography.paragraphSmall.letterSpacing',
        },
    },
};
