import { makeTheme } from '../../../styling';

export const customTheme = makeTheme({
    armor: {
        components: {
            Navigation: {
                Root: {
                    base: {
                        borderWidth: '2px',
                    },
                },
            },
        },
    },
});

export const structure = [
    {
        label: 'Birds',
        id: 'birds',
        items: [
            {
                label: 'Hawk',
                id: 'hawk',
            },
            {
                label: 'Sparrowhawk',
                id: 'sparrowhawk',
            },
        ],
    },
    {
        label: 'Bugs',
        id: 'bugs',
        items: [
            {
                label: 'Dragonfly',
                id: 'dragonfly',
            },
            {
                label: 'Glowworm',
                id: 'glowworm',
            },
            {
                label: 'Ladybug',
                id: 'ladybug',
            },
        ],
    },
];
