const color = {
    main: '$color.primary.main',
    light: '$color.primary.light',
    hover: '$color.primary.05',
    dark: '$color.primary.dark',
    contrast: '$color.neutral.00',
    neutral01: '$color.neutral.01',
    neutral02: '$color.neutral.02',
    neutral03: '$color.neutral.03',
    neutral05: '$color.neutral.07',
};

export const checkboxDefaultTheme = {
    Root: {
        checked: {
            base: {
                borderColor: color.main,
                background: color.main,
            },
            hover: {
                borderColor: color.hover,
                background: color.hover,
            },
            disabled: {
                background: color.neutral02,
                borderColor: color.neutral03,
            },
            focus: {
                borderColor: color.contrast,
            },
            focusHover: {
                background: color.hover,
            },
        },
        unchecked: {
            hover: {
                borderColor: color.hover,
            },
            focus: {
                borderColor: color.main,
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
