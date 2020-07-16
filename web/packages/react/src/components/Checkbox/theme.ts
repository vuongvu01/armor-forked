const color = {
    main: '$color.primary.main',
    light: '$color.primary.light',
    dark: '$color.primary.dark',
    contrast: '$color.neutral.00',
    neutral01: '$color.neutral.01',
    neutral03: '$color.neutral.03',
    neutral05: '$color.neutral.05',
};

export const checkboxDefaultTheme = {
    Root: {
        checked: {
            base: {
                border: color.main,
                background: color.main,
            },
            hover: {
                border: color.light,
                background: color.light,
            },
            disabled: {
                background: color.neutral01,
                borderColor: color.neutral03,
            },
        },
        unchecked: {
            hover: {
                borderColor: color.dark,
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
