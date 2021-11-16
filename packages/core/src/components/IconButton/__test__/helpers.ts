import { makeTheme } from '@deliveryhero/armor-system';

export const customTheme = makeTheme({
    armor: {
        components: {
            IconButton: {
                borderWidth: '2px',
            },
        },
    },
});
