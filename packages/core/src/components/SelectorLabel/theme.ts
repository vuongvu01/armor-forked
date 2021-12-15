import { componentSpacing04 } from '@deliveryhero/armor-system';

const selectorLabelDefaultTheme = {
    Label: {
        base: {
            paddingLeft: componentSpacing04,
            // fontSize: '$typography.labelSmall.fontSize',
        },
        disabled: {
            color: '$color.neutral.05',
        },
        error: {
            color: '$color.error.main',
        },
        disabled__error: {
            color: '$color.error.lighter',
        },
    },
};

export default selectorLabelDefaultTheme;
