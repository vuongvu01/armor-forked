/* eslint-disable @typescript-eslint/camelcase */

export const typographyDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontSize: '$typography.body.fontSize',
            lineHeight: '$typography.body.lineHeight',
            fontWeight: '$typography.body.fontWeight',
            fontFamily: '$typography.body.fontFamily',
            letterSpacing: '$typography.body.letterSpacing',
            color: '$typography.body.color',
        },
        pageTitle: {
            fontSize: '$typography.pageTitle.fontSize',
            lineHeight: '$typography.pageTitle.lineHeight',
            letterSpacing: '$typography.pageTitle.letterSpacing',
        },
        sectionTitle: {
            fontSize: '$typography.sectionTitle.fontSize',
            lineHeight: '$typography.sectionTitle.lineHeight',
        },
        subSectionTitle: {
            fontWeight: '$typography.subSectionTitle.fontWeight',
        },
        label__large: {
            letterSpacing: '$typography.labelLarge.letterSpacing',
        },
        label__medium: {
            lineHeight: '$typography.labelMedium.lineHeight',
            letterSpacing: '$typography.labelMedium.letterSpacing',
        },
        label__small: {
            fontSize: '$typography.labelSmall.fontSize',
            lineHeight: '$typography.labelSmall.lineHeight',
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
            lineHeight: '$typography.paragraphSmall.lineHeight',
            letterSpacing: '$typography.paragraphSmall.letterSpacing',
        },
    },
};
