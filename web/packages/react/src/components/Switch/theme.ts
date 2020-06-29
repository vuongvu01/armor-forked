const sizes = {
    dimensions: {
        width: 32,
        height: 18,
        padding: 2,
    },
    toggle: {
        side: 14,
    },
};

export const toggleDefaultTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.04',
        },
        disabled: {
            backgroundColor: '$color.neutral.03',
            pointerEvents: 'none',
        },
        checked: {
            base: {
                backgroundColor: '$color.primary.main',
            },
            disabled: {
                backgroundColor: '#92BAF6', // TODO (nmelnikov 2020-06-19): hardcoded for now, until we settle on the colors
                pointerEvents: 'none',
            },
        },
    },
    Toggle: {
        base: { backgroundColor: '$color.primary.contrast' },
        disabled: { backgroundColor: '$color.neutral.01' },
    },
    Label: {
        base: {
            width: `${sizes.dimensions.width}px`,
            height: `${sizes.dimensions.height}px`,
        },
    },
    Slider: {
        base: {
            height: `${sizes.toggle.side}px`,
            width: `${sizes.toggle.side}px`,
            left: `${sizes.dimensions.padding}px`,
            bottom: `${sizes.dimensions.padding}px`,
        },
        translated: {
            transform: `translateX(${sizes.toggle.side}px)`,
        },
    },
};
