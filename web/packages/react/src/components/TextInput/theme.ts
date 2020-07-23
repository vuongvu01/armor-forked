/* eslint-disable @typescript-eslint/camelcase */
import { colorGrey00, colorGrey05 } from '../../tokens';

export const TextInputDefaultTheme = {
    Root: {
        base: {
            fontFamily: '$typography.sectionTitle.fontFamily',
            fontWeight: '$typography.sectionTitle.fontWeight',
            letterSpacing: '$typography.sectionTitle.letterSpacing',
            lineHeight: '$typography.sectionTitle.lineHeight',
            borderColor: '$color.neutral.04',
            borderRadius: '$figure.borderRadius.soft',
            backgroundColor: '$color.neutral.00',
        },
        outlined: {
            borderColor: '$color.primary.main',
        },
        error: {
            borderColor: '$color.error.main',
        },
        disabled: {
            backgroundColor: '$color.neutral.02',
            borderColor: '$color.neutral.04',
        },
    },
    Input: {
        base: {
            fontSize: '$typography.paragraphMedium.fontSize',
            color: '$color.neutral.06',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            backgroundColor: '$color.neutral.00',
            borderRadius: '$figure.borderRadius.soft',

            '&::placeholder': {
                color: '$color.neutral.05',
            },
            '&:disabled': {
                color: '$color.neutral.05',
                borderColor: '$color.neutral.03',
                backgroundColor: '$color.neutral.02',

                '&::placeholder': {
                    color: '$color.neutral.04',
                },
            },
        },
        large: {
            paddingTop: 3,
            paddingBottom: 3,
        },
    },
    Label: {
        base: {
            background: `linear-gradient(0, ${colorGrey00} 50%, transparent 50%)`,
            color: '$color.neutral.05',
            fontSize: '$typography.labelSmall.fontSize',
            fontWeight: '$typography.body.fontWeight',
            marginLeft: 3,
            marginRight: 3,
            lineHeight: '1.6',
            top: '-13px',
        },
        inside: {
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            top: 3,
        },
        inside__large: {
            top: 3,
        },
        outlined: {
            color: '$color.neutral.06',
        },
        disabled: {
            background: 'transparent',
            color: '$color.neutral.04',
        },
        error: {
            color: '$color.error.main',
        },
    },
    LabelBackground: {
        base: {
            paddingLeft: 1,
            paddingRight: 1,
        },
        disabled: {
            background: `linear-gradient(0, ${colorGrey05} 50%, transparent 50%)`,
        },
    },
};
