const color = {
    main: '$color.primary.main',
    light: '$color.primary.light',
    contrast: '$color.primary.contrast',
    neutral00: '$color.neutral.00',
    neutral02: '$color.neutral.02',
    neutral03: '$color.neutral.03',
};

export const radioDefaultTheme = {
    Container: {
        base: {
            backgroundColor: color.neutral00,
            borderColor: color.neutral03,
            borderRadius: '$shape.borderRadius.pill',
        },
        disabled: {
            backgroundColor: color.neutral02,
            borderColor: color.neutral03,
            borderRadius: '$shape.borderRadius.pill',
        },
        highlighted: {
            borderColor: color.main,
        },
        hover: {
            borderColor: color.light,
        },
    },
    Dot: {
        base: {
            backgroundColor: color.main,
            borderRadius: '$shape.borderRadius.pill',
        },
        disabled: {
            backgroundColor: color.neutral03,
            borderRadius: '$shape.borderRadius.pill',
        },
        hover: {
            backgroundColor: color.light,
        },
    },
    Root: {
        base: {},
    },
};
