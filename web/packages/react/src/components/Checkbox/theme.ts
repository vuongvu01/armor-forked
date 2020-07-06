const color = {
    main: '$color.primary.main',
    dark: '$color.primary.dark',
    contrast: '$color.primary.contrast',
    neutral01: '$color.neutral.01',
    neutral03: '$color.neutral.03',
    neutral05: '$color.neutral.05',
};

export const buttonDefaultTheme = {
    Root: {
        checked: {
            base: {
                border: color.main,
                background: color.main,
            },
            hover: {
                border: color.dark,
                background: color.dark,
            },
            disabled: {
                background: color.neutral01,
                borderColor: color.neutral03,
            },
        },
        checkmark: {
            base: {
                color: color.contrast,
            },
            disabled: {
                color: color.neutral05,
            },
            box: {
                border: color.neutral03,
                background: color.contrast,
                borderWidth: '1px',
                borderStyle: 'solid',
            },
        },
    },
};
